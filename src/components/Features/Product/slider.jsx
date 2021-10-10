import React from 'react';
import { useState } from 'react';
const Slider = ({ images }) => {
    console.log(images)
    const [activeImg, setActiveImg] = useState(0);
    return (<>
        <div className="item">
            <div className="images-slider">

                {images?.length && images?.map((img, i) => (

                    <div key={i}
                    >
                        <img className={i === activeImg ? "activeImg" : ""}
                            src={`/images/${img}`}

                            alt={img}
                            onClick={() => { setActiveImg(i) }}
                        />
                    </div>
                ))}

            </div>
            <div className="main-slider img-container">
                <img
                    src={`/images/${images?.length && images[activeImg]}`}

                    alt="" />
                <div className="wish-container">
                    <i className="far fa-heart"></i>
                </div>
                <div className="line"></div>
            </div>
        </div>
    </>);
}

export default Slider;