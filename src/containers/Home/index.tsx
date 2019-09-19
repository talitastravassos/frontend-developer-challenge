import React from 'react'
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import NewsLetter from '../../components/NewsLetter';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <ProductList/>
            <NewsLetter/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
