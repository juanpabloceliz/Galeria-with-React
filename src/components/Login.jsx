import React, { Component } from "react"

import "../assets/Login.scss"

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="login">
          <section className="login__title">
            <img
              src="https://urbetrack.com/wp-content/uploads/2017/05/urbelogo.png"
              alt="urbetrack logo"
            />
            <h1>Bienvenido</h1>
          </section>
          <section className="login__form">
            <input
              type="text"
              className="login__form--user"
              id="User"
              placeholder="Usuario"
              required="true"
            />
            <input
              type="password"
              className="login__form--password"
              id="Password"
              placeholder="Contraseña"
              required="true"
            />
          </section>
          <button className="login__btn">Ingresar</button>
          <section className="login__text">
            <p>Esta es una prueba técnica sobre React.</p>
          </section>
        </section>
      </React.Fragment>
    )
  }
}
