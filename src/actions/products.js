import axios from "../utilities/api";
import { GET_PRODUCTS, PRODUCTS_ERROR, GET_PRODUCT, FILTER_ALL } from "./types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/products");
    const products = res.data.sort((a, b) => b.soldItems - a.soldItems);
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/products/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
    });
  }
};
export const handleSort = (v, products) => {
  if (v == "new") {
    const filtered = products.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return filtered;
  } else {
    const filtered = products.sort((a, b) => b.soldItems - a.soldItems);

    return filtered;
  }
};
const filterByCatogrie = (products, cat) => {
  const filtered = products?.filter((pr) => pr.catogrie == cat);
  return filtered;
};
const filterByTypes = (products, types) => {
  const filtered = products?.filter((p) => types.includes(p.type));
  return filtered;
};
const filterBySizes = (products, sizes) => {
  const filtered = products?.filter((p) =>
    sizes.some((s) => p.sizes.includes(s))
  );
  return filtered;
};
const filterByCollection = (products, cols) => {
  const filtered = products?.filter((p) =>
    cols.some((col) => p.collection.includes(col))
  );

  return filtered;
};
const filterByColors = (products, colors) => {
  const filtered = products?.filter((p) =>
    colors.some((c) => p.colors.includes(c))
  );
  return filtered;
};
const filterByPrice = (products, min, max) => {
  const filtered = products?.filter((p) => p.price >= min && p.price <= max);
  return filtered;
};

export const filterAll =
  (
    products,
    sizes,
    catogried,
    types,
    collections,
    colors,
    sort,
    min,
    max,
    pPerPage,
    currentPage
  ) =>
  async (dispatch) => {
    if (catogried) {
      products = filterByCatogrie(products, catogried);
    }
    if (types.length) {
      products = filterByTypes(products, types);
    }
    if (sizes.length) {
      products = filterBySizes(products, sizes);
    }
    if (collections.length) {
      products = filterByCollection(products, collections);
    }
    if (colors.length) {
      products = filterByColors(products, colors);
    }
    products = filterByPrice(products, Number(min), Number(max));

    products = handleSort(sort, products);

    currentPage =
      currentPage > Math.ceil(products.length / pPerPage) ? 1 : currentPage;
    const indexOfLastProduct = currentPage * pPerPage;
    const indexOfFirstProduct = indexOfLastProduct - pPerPage;
    const currentProducts = products?.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    dispatch({
      type: FILTER_ALL,
      payload: {
        products: products,
        paginate: {
          productsPerPage: pPerPage,
          totalProducts: products.length,

          currentPage: currentPage,
          currentProducts: currentProducts,
          sort: sort,
        },
      },
    });
  };
