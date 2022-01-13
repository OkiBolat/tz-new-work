import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import contactsReducer from "./reducers/contactsReducer";
const reducers = combineReducers({
  contactsPage: contactsReducer,
  authorized: authReducer
})

const store = createStore(reducers)

window.store = store

export default store