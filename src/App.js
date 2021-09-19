import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { connect } from 'react-redux'
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/products">
          {/* <Navbar /> */}
          {/*<CartContainer /> */}
          <Products />
        </Route>
        <Route exact path='/'>
          <SignUp />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>

  );
}



export default App;
