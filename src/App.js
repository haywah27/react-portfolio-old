import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <About />} />
          <Route path="/work" exact component={() => <Work />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
