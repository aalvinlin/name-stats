import React from "react"
import { NameForm } from "./components/NameForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Names</h1>
        <NameForm />
      </div>
    </Router>
  );
}

export default App;
