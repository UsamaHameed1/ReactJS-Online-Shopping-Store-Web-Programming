import React, { useEffect, useState } from 'react'

import "./Categories.css"

function Categories({ getCategoryProducts }) {

    const [productCategories, setProductCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const fetchCategories = async (url) => {
        const result = await fetch(url);
        const items = await result.json();

        console.log("categories : ", items);

        items.push("all");

        setProductCategories(items)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchCategories("https://dummyjson.com/products/categories");
    }, [])

    if (isLoading) {
        return (
            <>
            </>
        )
    }
    else {
        return (

            <div className="btn-select">
                {
                    productCategories.map((prod) => {
                        return (
                            <button
                                onClick={() => { getCategoryProducts(prod) }}
                                key={prod}>
                                {prod}
                            </button>

                        )
                    })
                }
            </div>
        )
    }
}

export default Categories