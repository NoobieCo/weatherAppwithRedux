import React from "react";
//import "./styles.css";
import Layout from "./Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}
