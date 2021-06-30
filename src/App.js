import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages";
import About from "./pages/about";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./pages/contactus";
import SignUp from "./pages/signup";
import Services from "./pages/services";
import SignIn from "./pages/signin";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
