import { LOGIN_REQUEST } from "../types/loginTypes"

// esta action maneja el login sin mucha ciencia

export const loginRequest = () => (payload) => ({
  type: LOGIN_REQUEST,
  payload,
})
