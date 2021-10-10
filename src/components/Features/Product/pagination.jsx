import { connect } from "react-redux";
import React, { useEffect } from "react";
const Pagination = ({
    productsPerPage,
    totalProducts,
    currentPage,
    paginatePrev,
    paginateNext,
}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    function hide(curr, n) {

        if (curr == n) {
            return 'hidden'
        }
        else {
            return ""
        }
    }
    return (
        <div>

            {
                pageNumbers.length > 1 &&

                <div className="paginate">
                    {
                        <div className={`item1 ${hide(currentPage, 1)}`}><div
                            onClick={paginatePrev}
                        >prev</div></div>

                    }
                    <div className="item2">page <span>{currentPage}</span></div>
                    <div className={`item3 ${currentPage >= Math.ceil(totalProducts / productsPerPage) ? 'hidden' : ''}`}>
                        <div

                            onClick={paginateNext}

                        >next</div></div>
                </div>
            }
        </div>



    );
};
const mapStateToProps = (state) => {
    return {
        productsPerPage: state?.products?.paginate.productsPerPage,
        totalProducts: state?.products?.paginate.totalProducts,

        currentPage: state?.products?.paginate.currentPage,


    };
};
export default connect(mapStateToProps)(Pagination);