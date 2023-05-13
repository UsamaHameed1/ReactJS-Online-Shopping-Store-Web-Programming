import React from 'react'

import "./cartProduct.css"

function cartProduct({ name, detail, removeProduct }) {

    return (

        <div className='single-product'>

            <div className="left">
                <h4>{detail.title} d</h4>
                <img src={detail.image} alt={detail.title} />
            </div>


            <div className="right">
                <p>Quantity : <span>{detail.quantity}</span></p>
                <p>Color : <span>black</span></p>
                <p>Price(each) : <span>{detail.price}</span> </p>
                <button
                    onClick={() => { removeProduct(detail.id) }}>
                    Remove
                </button>
            </div>
        </div>

    )
}

export default cartProduct