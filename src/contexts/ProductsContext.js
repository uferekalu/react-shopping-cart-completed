import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(response => {
                if(mounted) {
                    setProducts(response)
                }
            })
            return () => mounted = false;

        // const API_BASE_URL = `https://fakestoreapi.com/products`;
        // const fetchProduct = async () => {
        // setLoading(true);
        // setError(false);
        // try {
        //     const result = await axios.get(`${API_BASE_URL}`);
        //     setProducts(result.data);
        //     console.log(result.data)
        // } catch (error) {
        //     setError(true);
        // }
        // setLoading(false);
        // };
        // // Call the API
        // fetchProduct();
    }, []);

    return (
        <>
            {loading && (
                <div style={{ color: `green` }}>
                loading products from the Fake API Store
                </div>
            )}
            {error && (
                <div style={{ color: `red` }}>
                some error occurred, while fetching api
                </div>
            )}
            <ProductsContext.Provider value={{products}}>
                { children }
            </ProductsContext.Provider>
        </>
    );
}

export default ProductsContextProvider;