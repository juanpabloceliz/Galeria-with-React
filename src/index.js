import React from "react"
import ReactDOM from "react-dom"
import "./assets/index.css"
import App from "./pages/App"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reduxThunk from "redux-thunk"

import reducers from "./reducers/index"

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
