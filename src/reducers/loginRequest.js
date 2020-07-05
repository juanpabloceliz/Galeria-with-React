import { LOGIN_REQUEST } from "../types/loginTypes"

const INITIAL_STATE = {
  user: "",
  password: "",
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
        password: action.payload,
      }
    default:
      return state
  }
}
