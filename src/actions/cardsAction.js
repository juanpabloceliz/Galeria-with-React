import axios from "axios"
import { PULL_ALL, LOADING, ERROR } from "../types/cardsTypes"

// con esta action hago el GET a la API, usando axios, también hago el catch del error
// pero lo comunico sólo por consola.

export const pullAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  })
  try {
    const response = await axios.get("https://picsum.photos/v2/list")
    dispatch({
      type: PULL_ALL,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    })
    console.log("Error:", error.message)
  }
}
