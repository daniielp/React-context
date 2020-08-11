import React from 'react';
import NyhedContextProvider from './contexts/NyhedContext'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Nyheder from './components/Nyheder';
import Products from './components/Products';
import OpretNyhed from './components/OpretNyhed';
import Nyhed from './components/Nyhed'
import Product from './components/Product'

import ProductContextProvider from './contexts/ProductContext';



function App(props) {


  return (

    <ProductContextProvider>
      <NyhedContextProvider>

        <BrowserRouter>

          <div className="App container">


            <Navbar />

            <Route exact path="/" component={Home} />
            <Route exact path="/nyheder" component={Nyheder} />
            <Route exact path="/nyhed/:nyhedid" component={Nyhed} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product/:productid" component={Product} />
            <Route exact path="/opretnyhed" component={OpretNyhed} />


          </div>
        </BrowserRouter>

      </NyhedContextProvider>
    </ProductContextProvider>
  );
}

export default App;
