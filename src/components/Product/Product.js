import React from 'react';
import "./Product.css";

function Product(props) {

    const { id, title, price, category, stock, images } = props;

    return (
        <div className="product-card">

            <div className="product-tumb">
                <img src={images[0]} alt={title} />
            </div>

            <div className="product-details">

                <span className="product-catagory">{category}</span>
                <div className="product-bottom-details">

                    <div className="product-price">
                        <small>${price}</small>
                    </div>

                    <div className="product-count">
                        <small>{stock} items</small>
                    </div>
                </div>

                <button className='product-detail'>
                    <a href={`/products/${id}`}>
                        Detail
                    </a>
                </button>

            </div>
        </div>
    );
}

export default Product