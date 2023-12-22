/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
//import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function App() {
  return (
    <div className="App">  
    <Navbar/>
      <div className="lumx-spacing-padding-horizontal-huge">
        <Home />
      </div>
      {/*<Footer />*/}
      <Router>
        <Switch>
          <Route exact path="/">
            <section className="lumx-spacing-padding-horizontal-huge" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
