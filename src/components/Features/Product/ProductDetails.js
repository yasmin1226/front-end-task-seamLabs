import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";
import { getProduct } from "../../../actions/products";
import Description from "../../description";
import SelectedForYou from "../../selectedForYou";
import Slider from "./slider";
const ProductDetails = ({ product, getProduct }) => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  function handleDecrement() {
    let c = count;
    setCount(--c);
  }
  function handleIncrement() {
    let c = count;
    setCount(++c);
  }
  return (
    <>
      <section id="details">
        <div className="container">
          <div className="detail-nav">
            <div className="item">
              <div className="nav">
                <i className="fas fa-home"> </i> / ALL products /
                {product?.catogrie} / {product?.type} /
                <span className="darked"> {product?.name}</span>
              </div>
            </div>
            <div className="item">
              <div className="shiping-item">
                <div>
                  <i className="fas fa-truck"></i>
                </div>
                <div>
                  <h5>dfdf fdfdf fdfd</h5>
                  <h6 className="light-gray">dfdf fdhj www</h6>
                </div>
              </div>
              <div className="shiping-item">
                <div>
                  <i className="fas fa-truck"></i>
                </div>
                <div>
                  <h5>dfdf fdfdf fdfd</h5>
                  <h6 className="light-gray">dfdf fdhj www</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="product">
            <Slider images={product?.images} />
            <div className="item">
              <div className="flex">
                <div className="sale">
                  {product?.discount && <span>Sale</span>}
                </div>
                <div className="light-gray s-text">
                  <p>product id</p>
                  <p>{product?.id}</p>
                </div>
              </div>
              <div>
                <h2>{product?.name}</h2>
              </div>
              <div className="flex">
                <div className="flex price">
                  {product?.discount && (
                    <h3 className="hot-sale">
                      {product?.price - product?.discount}$
                    </h3>
                  )}
                  <h3
                    className={`light-color ${product?.discount ? "del" : ""} `}
                  >
                    {product?.price}$
                  </h3>
                </div>
                <div className="light-gray s-text">housu by</div>
              </div>
              <div className="color">
                <h3>Color:</h3>
                <div className="colors">
                  {product?.colors?.map((c, i) => (
                    <div key={i}>
                      <span style={{ backgroundColor: c }}></span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="size">
                <div>
                  <h3>size:</h3>
                  <p>see size table</p>
                </div>
                <select name="sizes" id="">
                  <option value="">choose size</option>
                  {product?.sizes.map((s) => (
                    <option value={s} key={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="quantity">
                <h3>Quantity:</h3>

                <div className="buttons">
                  <div className="count">
                    <button
                      className={count === 0 ? "light-color" : ""}
                      disabled={count === 0}
                      onClick={handleDecrement}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span>{count} </span>
                    <button onClick={handleIncrement}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="add-cart">
                    <button>ADD TO CART</button>
                  </div>
                  <div>
                    <i className="far fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Description />
      <SelectedForYou />
    </>
  );
};
const mapStateToProps = (state) => {
  return { product: state?.products?.product };
};
export default connect(mapStateToProps, { getProduct })(ProductDetails);
