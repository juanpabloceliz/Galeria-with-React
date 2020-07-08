import { PULL_ALL, LOADING, ERROR } from "../types/cardsTypes"

const INITIAL_STATE = {
  cards: [],
  loading: false,
  error: "",
}

//Este reducer se encarga de manejar el llamado a la API

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PULL_ALL:
      return { ...state, cards: action.payload, loading: false }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
