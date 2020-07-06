import React, { useState } from "react"
import { connect } from "react-redux"
import { logoutRequest } from "../actions/logoutAction"
import { Link } from "react-router-dom"

import "../assets/NavDrawer.scss"

const NavDrawer = (props) => {
  const [form, setValues] = useState({ props })

  const quitValues = () => {
    setValues({
      ...form,
      [props.user]: "",
    })
  }

  const handleOnClick = (event) => {
    event.preventDefault()
    props.logoutRequest(form)
    console.log(form)
    quitValues()
  }

  const printUser = (form) => {
    form.props.user.map((user) => <p> {user} </p>)
  }

  const darkMode = () => {
    var element = document.body
    element.classList.toggle("dark-mode")
  }

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
            usuario:
            {printUser}
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
