import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import { useParams } from "react-router-dom";

import FilterProducts from './FilterProduct';
import ProductItem from './ProductItem';
import { getProducts, handleSort } from "../../../actions/products"
import Pagination from './pagination';
import CurrentProducts from './CurrentProducts';
const ProductList = ({ getProducts, handleSort, filterdProducts, products, sortx }) => {
    const { id } = useParams();
    const [sort, setSort] = useState("popular");
    const [productsPerPage, setProductsPerPage] = useState(4)

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getProducts();
    }, [getProducts]);
    function handleSortFn(e) {
        e.preventDefault();
        setSort(e.target.value)
        // handleSort(e.target.value, products);
    }

    // Change page
    const paginateNext = () => setCurrentPage(currentPage + 1);
    const paginatePrev = () => setCurrentPage(currentPage - 1);
    return (<>
        <section id="main-section">
            <div className="container">
                <div className="nav"><i className="fas fa-home"> </i> / ALL products</div>
                <div className="main-section-content">
                    <FilterProducts
                        catogrieId={id}
                        sort={sort}
                        productsPerPage={productsPerPage}
                        currentPage={currentPage}

                    />
                    <div className="item products">

                        <div className="products-head">
                            <div className="item">
                                <p>Mens Tops <span className="light-color">({filterdProducts?.length})</span></p>
                            </div>
                            <div className="item">
                                <h3>show products :</h3>
                                <select name="" id="" value={productsPerPage} onChange={(e) => {
                                    setProductsPerPage(e.target.value)
                                    // setCurrentPage(1)
                                }}>
                                    <option value="4">4</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="item">
                                <h3>Sort :</h3>
                                <select name="" id="" value={sort} onChange={(e) => handleSortFn(e, filterdProducts)}>

                                    <option value="popular">popular</option>
                                    <option value="new">new</option>
                                </select>
                            </div>
                        </div>
                        <CurrentProducts />
                        <Pagination
                            // totalProducts={filterdProducts.length}
                            paginateNext={paginateNext}
                            paginatePrev={paginatePrev}
                        // currentPage={currentPage}

                        // productsPerPage={productsPerPage}
                        />
                    </div>

                </div>
            </div>
        </section>
    </>);
}
const mapStateToProps = (state) => {
    return {
        sortx: state?.products?.paginate?.sort,
        // products: state?.products?.products,
        filterdProducts: state?.products?.filterdProducts
    };
};
export default connect(mapStateToProps, { getProducts, handleSort })(ProductList);