import React, { Component } from "react"
import { connect } from "react-redux"

import * as cardsAction from "../actions/cardsAction"

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

    return <div className="content">{this.createCard()}</div>
  }

  createCard = () =>
    this.props.cards.map((card) => (
      <div className="content__card" key={card.id}>
        <div className="content__card--title">
          <h2> {card.author} </h2>
        </div>
        <div className="content__card--image">
          <img src={card.download_url} alt="img" width="100%" />
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
