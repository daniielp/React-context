import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Nyheder from './components/Nyheder';
import OpretNyhed from './components/OpretNyhed';



function App(props) {


  return (

      <BrowserRouter>

        <div className="App container">


          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/nyheder" component={Nyheder} />
          <Route exact path="/opretnyhed" component={OpretNyhed} />


        </div>
      </BrowserRouter>
  );
}

export default App;
