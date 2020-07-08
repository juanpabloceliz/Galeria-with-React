import { LOGIN_REQUEST, LOGOUT_REQUEST } from "../types/loginTypes"

const INITIAL_STATE = {
  user: "",
  password: "",
}

// Este reducer maneja todo respecto a login logout

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
        password: action.payload,
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
        password: action.payload,
      }
    default:
      return state
  }
}
