import axios from "axios"
import { PULL_ALL, LOADING, ERROR } from "../types/cardsTypes"

export const pullAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  })
  try {
    const response = await axios.get("https://picsum.photos/v2/list")
    // ?page=1&limit=2

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
