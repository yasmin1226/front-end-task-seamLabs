import React from 'react';
import { Link } from "react-router-dom"
const ProductItem = ({ product }) => {
    return (
        <>
            <div className="grid-item">
                <div className="img-container">
                    <div className="wish-container">
                        <i className="far fa-heart"></i>
                    </div>
                    <img
                        src={`images/${product?.images[0]}`}
                        alt=""
                    />
                </div>
                <div className="content">
                    <h3 className="light-gray"> <Link to={`/products/${product.id}`}>{product?.name}</Link></h3>

                    <span className={product?.discount ? "hot-sale" : ""}> $
                        {product?.discount ? (product?.price - product?.discount) : product?.price}
                    </span>
                    {product?.discount && <span className="del"> {product?.price} $ </span>}
                </div>
            </div>
        </>
    );
}

export default ProductItem;