import React, { useEffect, useContext } from 'react';
import './App.css';
import Home from './containers/Home';
import { ProductContext } from './context/ProductContext';

const App = () => {

  const { action: { test }} = useContext(ProductContext)

  useEffect(() => {
    test()
  }, [])

  return (
    <Home/>
  );
}

export default App;
