import React from "react"
import ProductCards from "../Components/ProductCards"
import { useEffect, useState } from "react"

const Products = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_HOST}/products/`)
    .then((response) => response.json())
    .then((responseData) => {
        setProducts(responseData);
        setError(null)
    })
    .catch((err) => {
        setError(err.message);
        setProducts(null)
    })
    .finally(() => {
        setLoading(false)
    });
    }, []);
    
    return (
        <>
        <div className="main-content">
            {loading && <div> please wait ... </div>}

            {error && <div> error occurred loading products </div>}

            {products && <ProductCards products={products}/>}
        </div>
        </>
    )}

export default Products