import React from 'react'
import style from "./productcard.module.css"
import { Product } from '../../context/product.types'

interface Props {
    product: Product
}
const ProductCard = ({product}: Props) => {

    return (
        <div className={style.card}>
            <div className={style.divImage}><img src={product.image} alt="product"/></div>
            <h4 className="mt-3">{ product.name }</h4>
            <p> { product.description } </p>
            <h5>De: R$ { product.oldPrice }</h5>
            <h4>Por: R$ { product.price }</h4>
            <h5>ou { product.installments.count + "x" } de R$ { product.installments.value }</h5>
            <button className="btn btn-outline-secondary btn-block">Comprar</button>
        </div>
    )
}

export default ProductCard
