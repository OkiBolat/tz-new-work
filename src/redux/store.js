import { createStore, combineReducers } from "redux";
import contactsReducer from "./reducers/contactsReducer";
const reducers = combineReducers({
  contactsPage: contactsReducer
  
})

const store = createStore(reducers)

export default store