import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Routes from "./Routes"
import Tabs from "./components/Tabs"


function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Tabs/>

          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
