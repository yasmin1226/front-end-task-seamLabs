import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  GET_PRODUCT,
  FILTER_BY_NEW,
  FILTER_BY_POPULAR,
  FILTER_ALL,
} from "../actions/types";
const initialState = {
  products: [],
  product: null,
  filterdProducts: [],
  paginate: { sort: "popular" },
};

const Product = (state = initialState, action) => {
  // const sorted=()=>{
  //   state.filterdProducts.sort((a,b)=>{a.price>b.price?1:-1})
  //   return state.filterdProducts
  // }
  const { type, payload } = action;
  console.log("state", state);
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...payload],
        filterdProducts: [...payload],
        paginate: {
          productsPerPage: 2,
          totalProducts: payload?.length,
          currentPage: 1,
          currentProducts: [...payload],
        },
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        // paginate: {
        //   productPerPage: 2,
        //   totalProducts: payload?.length,
        //   currentPage: 1,
        //   currentProducts: [...payload],
        // },
      };

    case FILTER_BY_NEW:
      return {
        ...state,
        filterdProducts: payload,
      };
    case FILTER_BY_POPULAR:
      console.log("state.products", state.products);
      return {
        ...state,
        filterdProducts: payload,
      };
    // productsPerPage,
    //     totalProducts,

    //     currentPage,

    // productPerPage:pPerPage,
    // totalProducts: products.length,

    // currentPage: currentPage,
    // currentProducts: currentProducts,
    case FILTER_ALL:
      return {
        ...state,
        filterdProducts: payload.products,
        paginate: {
          productsPerPage: payload.paginate.productsPerPage,
          totalProducts: payload.paginate.totalProducts,
          currentPage: payload.paginate.currentPage,
          currentProducts: payload.paginate.currentProducts,
          sort: payload.paginate.sort,
        },
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default Product;
