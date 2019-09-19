import React, { useEffect, useContext } from 'react'
import Loader from 'react-loader-spinner'
import ProductCard from '../ProductCard'
import style from "./productlist.module.css";
import { ProductContext } from '../../context/ProductContext';

const ProductList = () => {

    const {
        state: { products, nextPage, loading },
        action: { getProducts } } = useContext(ProductContext)

    useEffect(() => {
        console.log(products)
    }, [products])

    const handleNextPage = () => {
        getProducts(nextPage)
    }

    return (
        <div className={style.container}>
            <h2 className="mb-5">Sua seleção especial</h2>
            <div className={style.productsContainer}>
                {products.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })
                }
            </div>
            {(loading) ? (
                <Loader
                    type="Grid"
                    color="#888888"
                    height={50}
                    width={50}
                />) : (
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleNextPage()}> Ainda mais produtos aqui! </button>
                )}
        </div>
    )
}

export default ProductList
