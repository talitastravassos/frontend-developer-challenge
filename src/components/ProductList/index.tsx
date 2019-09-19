import React, { useEffect, useContext } from 'react'
import ProductCard from '../ProductCard'
import style from "./productlist.module.css";
import { ProductContext } from '../../context/ProductContext';

const ProductList = () => {

    const { 
        state: { products, nextPage },
        action: { getProducts }} = useContext(ProductContext)

    useEffect(() => {
        // getProducts()
        console.log(products)
    }, [products])
    
    const handleNextPage = () => {
        // console.log(nextPage)
        getProducts(nextPage)
    }

    return (
        <div className={style.container}>
            <h2 className="mb-5">Sua seleção especial</h2>
            <div className={style.productsContainer}>
                {
                    products.map( product => {
                        return <ProductCard product={product} key={product.id}/>
                    })
                }
            </div>
            <button className="btn btn-outline-secondary" onClick={() => handleNextPage()}> Ainda mais produtos aqui! </button>
        </div>
    )
}

export default ProductList
