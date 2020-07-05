import { LOGIN_REQUEST } from "../types/loginTypes"

export const loginRequest = () => (payload) => ({
  type: LOGIN_REQUEST,
  payload,
})
