import { LOGOUT_REQUEST } from "../types/loginTypes"

// y esta action maneja el logout también bastante sencillo

export const logoutRequest = () => (reducer) => ({
  type: LOGOUT_REQUEST,
  reducer,
})
