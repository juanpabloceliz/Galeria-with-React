import React, { useState } from "react"
import { connect } from "react-redux"
import { loginRequest } from "../actions/loginAction"

import "../assets/Login.scss"
import swal from "sweetalert"

const Login = (props) => {
  // Defino el estado local para poder utilizarlo con hooks

  const [form, setValues] = useState({ props })

  // Con 'handleInput' recibo los valores del input usuario y contraseña para pushearlos al estado local

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  // Con 'handleSubmit' llamo al action de login para que pase los datos del estado local al store de redux
  // y aplico la lógica para que filtre la contraseña válida de las incorrectas.

  const handleSubmit = (event) => {
    event.preventDefault()
    props.loginRequest(form)
    if (form.password === "01234") {
      props.history.push("/home")
    } else {
      swal("Contraseña incorrecta!", "Por favor ingrésala nuevamente!", "error")
    }
  }

  // Dentro del return está toda la estructura del componente

  return (
    <React.Fragment>
      <div className="layout">
        <section className="login">
          <section className="login__title">
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
            <p>
              Esta es una prueba para React, la contraseña válida es "01234".
            </p>
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

// A pesar de tener un solo reducer y una sola action uso los nombres por convención por buena práctica

export default connect(mapStateToProps, mapDispatchToProps)(Login)
