import React from 'react';
import NyhedContextProvider from './contexts/NyhedContext';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Nyheder from './components/Nyheder';
import OpretNyhed from './components/OpretNyhed';
import Nyhed from './components/Nyhed';



function App(props) {


  return (



    <NyhedContextProvider>
      <ProduktContextProvider>
        <BrowserRouter>

          <div className="App container">


            <Navbar />

            <Route exact path="/" component={Home} />
            <Route exact path="/nyheder" component={Nyheder} />
            <Route exact path="/nyhed/:nyhedid" component={Nyhed} />
            <Route exact path="/opretnyhed" component={OpretNyhed} />


          </div>
        </BrowserRouter>
      </ProduktContextProvider>
    </NyhedContextProvider>

  );
}

export default App;
