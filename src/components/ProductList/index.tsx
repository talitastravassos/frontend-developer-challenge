import React, { useEffect, useContext } from 'react'
import ProductCard from '../ProductCard'
import style from "./productlist.module.css";
import { ProductContext } from '../../context/ProductContext';

const ProductList = () => {

    const { 
        state: { products },
        action: { getProducts }} = useContext(ProductContext)

    useEffect(() => {
        // getProducts()
        console.log(products)
    }, [products])    

    return (
        <div className={style.container}>
            <h2>Sua seleção especial</h2>
            <div className={style.productsContainer}>
                {
                    products.map( product => {
                        return <ProductCard product={product}/>
                    })
                }
            </div>
            <button className="btn btn-outline-secondary"> Ainda mais produtos aqui! </button>
        </div>
    )
}

export default ProductList
