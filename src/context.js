import { createContext, useState, useEffect } from "react";

const AppContext = createContext();


const AppProvider = ({ children }) => {

    const [isloading, setIsloading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProducts = async (url) => {
        try {

            const result = await fetch(url);
            const items = await result.json();
            setProducts(items.products);
            setIsloading(false);

            console.log("products from api : ", items.products);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        const url = "https://dummyjson.com/products";
        fetchProducts(url);
    }, [])

    // Display products based on the button press category

    const getCategoryProducts = async (categoryName) => {
        if (categoryName === "all") {
            const result = await fetch("https://dummyjson.com/products");
            const items = await result.json();
            setProducts(items.products);
        }
        else {
            const result = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
            const items = await result.json();
            setProducts(items.products)
        }
    }

    // Search based on the input 
    const searchProducts = async (e) => {
        const inputValue = e.target.value;

        if (inputValue) {
            const result = await fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
            const items = await result.json();
            setProducts(items.products);

        }
        else {
            const result = await fetch("https://dummyjson.com/products");
            const items = await result.json();
            setProducts(items.products);
        }

    }

    return (
        <AppContext.Provider value={{ isloading, products, getCategoryProducts, searchProducts }}>
            {children}
        </AppContext.Provider >
    )

}

export { AppContext, AppProvider }