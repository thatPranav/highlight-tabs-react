import React from "react";
import {
    Switch,
    Route
  } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Features from "./pages/Features"

export default function Routes() {
    return (
        <Switch>  
            <Route path="/highlight-tabs-react/about">
                <About />
            </Route>
            <Route path="/highlight-tabs-react/features">
                <Features />
            </Route>
            <Route path="/highlight-tabs-react/" exact>
                <Home />
            </Route>
        </Switch>
    )
}