import { ADD_CONTACT, GET_CONTACTS, DELETE_CONTACT, EDIT_CONTACT } from "./actions"

const initialState = [];

const contactsReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_CONTACTS:
      return action.payload
    case ADD_CONTACT:
      const card = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone
      };
      return [
        ...state, card
      ];
    case DELETE_CONTACT:
      return state.filter(item => item.id !== action.payload.id);
    case EDIT_CONTACT:
      return state.map((contact) => {
        if (contact.id === action.payload.id) return action.payload;
        return contact;
      });
    default:
      return state
  };
};

export default contactsReducer