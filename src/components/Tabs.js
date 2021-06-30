import React from "react"
import {
    NavLink
  } from "react-router-dom";
import Tab from "./Tab"

export default function Tabs() {
    return (
        <div className="tabs">
    <Tab>
        <NavLink to="/highlight-tabs-react/" activeClassName="is-active" exact>Home</NavLink>
    </Tab>
    <Tab>
        <NavLink to="/highlight-tabs-react/about" activeClassName="is-active">About</NavLink>
    </Tab>
    <Tab>
        <NavLink to="/highlight-tabs-react/features" activeClassName="is-active">Features</NavLink>
    </Tab>
</div>
    )
}