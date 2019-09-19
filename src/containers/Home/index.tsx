import React from 'react'
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import NewsLetter from '../../components/NewsLetter';

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <ProductList/>
            <NewsLetter/>
        </React.Fragment>
    )
}

export default Home
