import { ADD_CONTACT, GET_CONTACTS, DELETE_CONTACT } from "./actions"

const initialState = {
  contacts: [{
    id: 1,
    name: 'Bulat',
    email: 'adasdasd@asd.com',
    phone: '2131412-123123'
  },
  {
    id: 2,
    name: 'Bulat',
    email: 'adasdasd@asd.com',
    phone: '2131412-123123'
  },
  {
    id: 3,
    name: 'Bulat',
    email: 'adasdasd@asd.com',
    phone: '2131412-123123'
  },
  {
    id: 4,
    name: 'Bulat',
    email: 'adasdasd@asd.com',
    phone: '2131412-123123'
  },
]}


const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state, contacts: [...state.contacts, action.payload]
      }
    case ADD_CONTACT:
      const card = {
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone
      }
      return {
        ...state, contacts: [...state.contacts, card]
      }
      case DELETE_CONTACT: 
      return {
        ...state, contacts : state.contacts.filter(item => item.id !== action.payload.id)
      }

    default:
      return state
  }
}


export default contactsReducer