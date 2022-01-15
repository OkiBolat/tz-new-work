import { combineReducers } from "redux"; 
import contactsReducer from "./contacts/reducer";
import authReducer from "./auth/reducer";

const rootReducer =  combineReducers({
  contacts: contactsReducer,
  auth: authReducer
})

// export const RootState = ReturnType<typeof rootReducer>

export default rootReducer 