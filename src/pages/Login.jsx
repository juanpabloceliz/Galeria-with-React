import React, { useState } from "react"
import { connect } from "react-redux"
import { loginRequest } from "../actions/loginAction"

import "../assets/Login.scss"
import swal from "sweetalert"

const Login = (props) => {
  const [form, setValues] = useState({ props })

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.loginRequest(form)
    if (form.password === "123456") {
      props.history.push("/home")
    } else {
      swal("Contraseña incorrecta!", "Por favor ingrésala nuevamente!", "error")
    }
  }

  return (
    <React.Fragment>
      <div className="layout">
        <section className="login">
          <section className="login__title">
            <img
              src="https://urbetrack.com/wp-content/uploads/2017/05/urbelogo.png"
              alt="urbetrack logo"
            />
            <h1>Bienvenido</h1>
          </section>
          <form className="login__form" onSubmit={handleSubmit}>
            <input
              name="user"
              type="text"
              className="login__form--user"
              placeholder="Usuario"
              required={true}
              onChange={handleInput}
            />
            <input
              name="password"
              type="password"
              className="login__form--password"
              placeholder="Contraseña"
              required={true}
              onChange={handleInput}
            />
            <button type="submit" className="login__btn">
              Ingresar
            </button>
          </form>
          <section className="login__text">
            <p>Esta es una prueba técnica sobre React.</p>
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.loginReducer
}

const mapDispatchToProps = {
  loginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
