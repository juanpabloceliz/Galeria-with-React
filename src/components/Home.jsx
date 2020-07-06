import React, { Component } from "react"
import { connect } from "react-redux"

import * as cardsAction from "../actions/cardsAction"

import NavDrawer from "./NavDrawer"
import LoadingIcon from "./resources/LoadingIcon.jsx"
import "../assets/Home.scss"

class Home extends Component {
  componentDidMount() {
    this.props.pullAll()
  }

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
