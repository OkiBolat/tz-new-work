import { SET_AUTH } from "./actions";


const initialState = {
  isAuthorized: true,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state
      }
    default:
      return state;
  }
}



export default authReducer