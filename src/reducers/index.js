import { combineReducers } from "redux"
import cardsCall from "./cardsCall"
import loginReducer from "./loginReducer"

// Combino ambos reducers para poder tenerlos en un unico estado

export default combineReducers({
  cardsCall,
  loginReducer,
})
