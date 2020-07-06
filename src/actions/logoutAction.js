import { LOGOUT_REQUEST } from "../types/loginTypes"

export const logoutRequest = () => (reducer) => ({
  type: LOGOUT_REQUEST,
  reducer,
})
