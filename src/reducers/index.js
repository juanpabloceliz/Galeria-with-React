import { combineReducers } from "redux"
import cardsCall from "./cardsCall"
import loginReducer from "./loginReducer"

export default combineReducers({
  cardsCall,
  loginReducer,
})
