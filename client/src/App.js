import './App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
// import Main from './views/Main';
import Context from './context/Context.js'
import Home from './views/Home';
import Dashboard from './views/Dashboard_K';
import AllSales from './views/AllSales';
// import LoginReg from './views/LoginReg';
import Detail from './views/Detail';
import New from './views/New'
import Registration from './components/Registration';
import Login from './components/Login';
import NewPostSale from './views/NewPostSale';

// TRICKLE DOWN STATE

function App() {
  const [updateView, setUpdateView] = useState(false)
      

  return (
    <div className="App">
      <Context.Provider value= {{updateView, setUpdateView}}>
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
          <New path="/sales/new" />
          <Detail path = "/sales/:sale_id" />
          <AllSales path = "/sales/"/>
          {/* <LoginReg path ="/start" /> */}
          <Registration path="register"/>
          <Login path="login"/>
          <NewPostSale path="new-sale"/>
        </Router>
      </Context.Provider>
      </div>
  );
}

export default App;
