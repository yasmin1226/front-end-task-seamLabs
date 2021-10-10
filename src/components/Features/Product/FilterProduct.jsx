import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { filterAll, handleSort } from "../../../actions/products"
import { handleSize, handleType, handleColor, handleCollection } from "../../../actions/filters"

const FilterProducts = ({ filterAll, catogrieId, products, sort, productsPerPage, currentPage, handleSize,
    handleType, handleColor, handleCollection, sizes, types, colors, collections }) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);

    useEffect(() => {
        filterAll(products, sizes, catogrieId, types, collections, colors, sort, min, max, productsPerPage, currentPage);
    }, [filterAll, products, sizes, catogrieId, types, collections, colors, sort, min, max, productsPerPage, currentPage]);


    return (<>
        <div className="filters">
            {/* <div>xx</div> */}
            <input type="checkbox" id="check2" />
            <label htmlFor="check2" className="checkbtn">
                <i class="fas fa-sliders-h"></i>
            </label>
            <div className="item filter">
                <div className="product-type">
                    <div className="filter-head">
                        <h3>product type</h3>
                        <div className="icon"><i className="fas fa-chevron-up"></i></div>
                    </div>
                    <div className="filter-body">

                        <div className="checkmark1">
                            <div>
                                <input type="checkbox" value="sweetshirt" id="sweetshirt" checked={types.includes('sweetshirt')} onChange={(e) => { handleType(e, types) }} />
                                <label htmlFor="sweetshirt">
                                    <span><span></span></span>
                                </label>

                            </div>
                            <span > sweetshirt</span>
                        </div>
                        <div className="checkmark1">
                            <div>
                                <input type="checkbox" value="top" id="top" checked={types.includes('top')} onChange={(e) => { handleType(e, types) }} />
                                <label htmlFor="top">
                                    <span><span></span></span>
                                </label>

                            </div>
                            <span > top</span>
                        </div>
                        <div className="checkmark1">
                            <div>
                                <input type="checkbox" value="t-shirt" id="t-shirt" checked={types.includes('t-shirt')} onChange={(e) => { handleType(e, types) }} />
                                <label htmlFor="t-shirt">
                                    <span><span></span></span>
                                </label>

                            </div>
                            <span > t-shirt</span>
                        </div>
                    </div>
                </div>
                <div className="product-price">
                    <div className="filter-head">
                        <h3>price</h3>
                        <div className="icon"><i className="fas fa-chevron-up"></i></div>
                    </div>
                    <div className="filter-body row">
                        <input type="number" name="" min="0" placeholder="minprice" value={min} onChange={(e) => setMin(e.target.value)} />

                        <input type="number" min="0" name="" placeholder="maxprice" value={max} onChange={(e) => setMax((e.target.value))} />
                    </div>
                </div>
                <div className="product-collection">
                    <div className="filter-head">
                        <h3>collection</h3>
                        <div className="icon"><i className="fas fa-chevron-down"></i></div>
                    </div>
                    <div className="filter-body">

                        <div className="checkmark1">
                            <div>
                                <input type="checkbox" value="winter" id="winter" checked={collections.includes('winter')} onChange={(e) => { handleCollection(e, collections) }} />
                                <label htmlFor="winter">
                                    <span><span></span></span>
                                </label>

                            </div>
                            <span > winter</span>
                        </div>
                        <div className="checkmark1">
                            <div>
                                <input type="checkbox" value="summer" id="summer" checked={collections.includes('summer')} onChange={(e) => { handleCollection(e, collections) }} />
                                <label htmlFor="summer">
                                    <span><span></span></span>
                                </label>

                            </div>
                            <span > summer</span>
                        </div>

                    </div>
                </div>
                <div className="product-size">
                    <div className="filter-head">
                        <h3>product size</h3>
                        <div className="icon"><i className="fas fa-chevron-up"></i></div>
                    </div>
                    <div className="filter-body ">
                        <div className="group" >
                            <input type="checkbox" value="xs" id="xs" checked={sizes.includes('xs')} onChange={(e) => handleSize(e, sizes)} />
                            <label htmlFor="xs">
                                <span >XS</span>
                            </label>
                            <input type="checkbox" value="s" id="s" checked={sizes.includes('s')} onChange={(e) => handleSize(e, sizes)} />
                            <label htmlFor="s">
                                <span >S</span>
                            </label>
                            <input type="checkbox" value="l" id="l" checked={sizes.includes('l')} onChange={(e) => handleSize(e, sizes)} />
                            <label htmlFor="l">
                                <span >l</span>
                            </label>
                            <input type="checkbox" value="xl" id="xl" checked={sizes.includes('xl')} onChange={(e) => handleSize(e, sizes)} />
                            <label htmlFor="xl">
                                <span >Xl</span>
                            </label>
                            <input type="checkbox" value="xxl" id="xxl" checked={sizes.includes('xxl')} onChange={(e) => handleSize(e, sizes)} />
                            <label htmlFor="xxl">
                                <span >XXl</span>
                            </label>
                            <input type="checkbox" value="xxxl" id="xxxl" checked={sizes.includes('xxxl')} onChange={(e) => handleSize(e, sizes)} />
                            <label htmlFor="xxxl">
                                <span >XXXl</span>
                            </label>
                            <input type="checkbox" value="xxxxl" id="xxxxl" checked={sizes.includes('xxxxl')} onChange={(e) => handleSize(e, sizes)} />
                            <label htmlFor="xxxxl">
                                <span >XXXXl</span>
                            </label>

                        </div>
                    </div>
                </div>
                <div className="product-color">
                    <div className="filter-head">
                        <h3>product color</h3>
                        <div className="icon"><i className="fas fa-chevron-up"></i></div>
                    </div>
                    <div className="filter-body">

                        <div className="group" >
                            <input type="checkbox" value="red" id="red" onChange={(e) => handleColor(e, colors)} />
                            <label htmlFor="red">
                                <span style={{ "backgroundColor": "red" }}></span>
                            </label>
                            <input type="checkbox" value="green" id="green" onChange={(e) => handleColor(e, colors)} />
                            <label htmlFor="green">
                                <span style={{ "backgroundColor": "green" }} ></span>
                            </label>
                            <input type="checkbox" value="blue" id="blue" onChange={(e) => handleColor(e, colors)} />
                            <label htmlFor="blue">
                                <span style={{ "backgroundColor": "blue" }} ></span>
                            </label>
                            <input type="checkbox" value="yellow" id="yellow" onChange={(e) => handleColor(e, colors)} />
                            <label htmlFor="yellow">
                                <span style={{ "backgroundColor": "yellow" }}></span>
                            </label>
                            <input type="checkbox" value="black" id="black" onChange={(e) => handleColor(e, colors)} />
                            <label htmlFor="black">
                                <span style={{ "backgroundColor": "black" }}></span>
                            </label>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>);
}
const mapStateToProps = (state) => {
    return {
        sizes: state?.filter?.sizes,
        types: state?.filter?.types,
        colors: state?.filter?.colors,
        collections: state?.filter?.collections,
        products: state?.products?.products,
        filterdProducts: state?.products?.filterdProducts,
    };
};
export default connect(mapStateToProps, { filterAll, handleSort, handleSize, handleType, handleColor, handleCollection })(FilterProducts);