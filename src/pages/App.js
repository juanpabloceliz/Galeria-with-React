import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Login from "../components/Login.jsx"
import Home from "../components/Home.jsx"

import "../assets/App.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
