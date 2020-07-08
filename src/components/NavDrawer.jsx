import React from "react"
import { connect } from "react-redux"
import { logoutRequest } from "../actions/logoutAction"
import { Link } from "react-router-dom"

import "../assets/NavDrawer.scss"

const NavDrawer = (props) => {
  // Hago una validación para chequear que haya usuario logueado
  // en este caso siempre va a ser así pero lo considero buena práctica

  const hasUser = Object.keys(props).length > 0

  // manejo el btn de cerrar sesión para que llame a la action de logout

  const handleOnClick = () => {
    props.logoutRequest({})
  }

  // con esta función manejo el elemento body para cambiarle el fondo de acuerdo a su clase

  const darkMode = () => {
    var element = document.body
    element.classList.toggle("dark-mode")
  }

  // en el return está toda la estructura del Nav Drawer

  return (
    <React.Fragment>
      <section className="navdrawer" id="navdrawer">
        <div className="navdrawer__user">
          <div className="navdrawer__user--photo">
            <img
              src="https://i.imgur.com/LlljaiO.png"
              alt="User icon"
              height="100%"
            />
          </div>
          <div className="navdrawer__user--name">
            {hasUser ? (
              <p>
                usuario: <br />
                {props.user}
              </p>
            ) : (
              <p>No hay usuario</p>
            )}
          </div>
          <div className="navdrawer__user--logout">
            <button onClick={handleOnClick}>
              <Link to="/">Cerrar sesión</Link>
            </button>
          </div>
        </div>
        <div className="navdrawer__changemode">
          <button type="button" onClick={darkMode}>
            MODO NOCTURNO
          </button>
        </div>
      </section>
    </React.Fragment>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.loginReducer
}

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer)
