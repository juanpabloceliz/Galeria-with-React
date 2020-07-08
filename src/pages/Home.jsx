import React, { Component } from "react"
import { connect } from "react-redux"

import * as cardsAction from "../actions/cardsAction"

import NavDrawer from "../components/NavDrawer"
import LoadingIcon from "../components/resources/LoadingIcon.jsx"

import "../assets/Home.scss"
import swal from "sweetalert"

class Home extends Component {
  // Al momento de finalizar el montaje del componente hago el llamado a la API
  // mediante la action 'pullAll'

  componentDidMount() {
    this.props.pullAll()
    swal(
      "Atención",
      "Para abrir el menú dirigirse hacia el lado izquierdo de la página.",
      "info"
    )
  }

  // Con la función 'showContent' aplico la lógica para que muestre el ícono de carga o el contenido ya obtenido.
  // El ícono de carga es un componente aparte dentro de la carpeta 'components/resources' por si
  // se necesita en otro momento.

  showContent = () => {
    if (this.props.loading) {
      return <LoadingIcon />
    }

    return (
      <div className="content">
        <NavDrawer />
        {this.createCard()}
      </div>
    )
  }

  // Con 'createCard' básicamente tomo los datos de la API que llegaron mediante el store de Redux
  // a este componente y los muestro en pantalla uno por uno con la función 'map'.

  createCard = () =>
    this.props.cards.map((card) => (
      <div className="content__card" key={card.id}>
        <div className="content__card--title">
          <h2> {card.author} </h2>
        </div>
        <div className="content__card--image">
          <img src={card.download_url} alt="img" width="100%" z-index="5" />
        </div>
        <div className="content__card--data">
          <h2>Id: {card.id}</h2>
          <h2>Autor: {card.author}</h2>
          <h2>Ancho: {card.width.toString()}</h2>
          <h2>Alto: {card.height.toString()}</h2>
          <h2>URL: {card.url}</h2>
          <h2>Descarga: {card.download_url}</h2>
        </div>
      </div>
    ))

  render() {
    return <div>{this.showContent()}</div>
  }
}

const mapStateToProps = (reducers) => {
  return reducers.cardsCall
}

export default connect(mapStateToProps, cardsAction)(Home)
