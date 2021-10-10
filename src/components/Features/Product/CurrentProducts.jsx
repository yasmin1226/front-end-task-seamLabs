import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
const CurrentProducts = ({ currentProducts }) => {
    return (<>

        <div className="products-body">
            {currentProducts && currentProducts?.map(pr => (

                <ProductItem product={pr} key={pr.id} />
            ))}




        </div>
    </>);
}
const mapStateToProps = (state) => {
    return {


        currentProducts: state?.products?.paginate.currentProducts,


    };
};
export default connect(mapStateToProps)(CurrentProducts);