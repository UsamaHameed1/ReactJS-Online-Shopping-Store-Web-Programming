import React from 'react';
import { useContext } from 'react';

import { AppContext } from '../../context';

import Product from '../Product/Product';
import Categories from '../Categories/Categories';
import "./Products.css"


function Products(props) {
    const { getCategoryProducts, products, isloading } = useContext(AppContext);


    if (isloading) {
        return (
            <>
                <h1>Loading ...</h1>
            </>
        )
    }

    return (
        <>
            <Categories getCategoryProducts={getCategoryProducts}></Categories>


            <section className='products'>
                {products.map((product) => {
                    return (
                        <Product key={product.id} {...product} />
                    )
                })}
            </section>
        </>

    )


}

export default Products