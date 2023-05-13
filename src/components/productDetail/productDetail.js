import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import addToCart from '../../AddCart';
import "./productDetail.css";


function ProductDetail() {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({})
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);


    const fetchProduct = async () => {

        const url = `https://dummyjson.com/products/${id}`
        const response = await fetch(url)
        const prod = await response.json();

        console.log(`Product with id ${id} is  :`, prod);

        setProduct({ ...prod })
        setIsLoading(false);
    }


    useEffect(() => {
        fetchProduct()
    }, [])

    if (isLoading) {
        return (
            <>
                <h2>Loading...</h2>
            </>
        )
    }
    else {
        const { id, title, price, description, category, images, rating } = product;
        return (
            <div className='product-description'>


                <div className="details-left">
                    <h3>{title}</h3>
                    <img src={images[0]} alt={title} />
                </div>


                <div className="details-right">

                    <h3 className="price">${price}</h3>
                    <div className="description">
                        {description}
                    </div>

                    <div className="options sides">
                        <label htmlFor="">Side: </label>
                        <button>Front</button>
                        <button>Back</button>
                    </div>

                    <div className="options color">
                        <label htmlFor="">Color: </label>
                        <button>White</button>
                        <button>Blue</button>
                        <button>Green</button>
                        <button>Yellow</button>
                    </div>

                    <div className="options quantity">
                        <label >Quantity: </label>
                        <select
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(e.target.value)
                            }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="add-to-cart">
                        <button
                            onClick={() => { addToCart({ ...product, quantity }) }}>Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        )

    }
}

export default ProductDetail