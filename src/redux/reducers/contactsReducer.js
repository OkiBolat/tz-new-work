import { ADD_CONTACT, GET_CONTACTS, DELETE_CONTACT } from "./actions"

const initialState = {
  contacts: [{
  id: 1,
  name: 'Bulat',
  mail: 'adasdasd@asd.com',
  phone: '2131412-123123'
},
{
  id: 1,
  name: 'Bulat',
  mail: 'adasdasd@asd.com',
  phone: '2131412-123123'
},
{
  id: 1,
  name: 'Bulat',
  mail: 'adasdasd@asd.com',
  phone: '2131412-123123'
},
{
  id: 1,
  name: 'Bulat',
  mail: 'adasdasd@asd.com',
  phone: '2131412-123123'
},]}


const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state, contacts: [...state.contacts, action.payload]
      }
    case ADD_CONTACT:
      const card = {
        name: action.payload.name,
        mail: action.payload.mail,
        phone: action.payload.phone
      }
      return {
        ...state, contacts: [...state.contacts, card]
      }

    default:
      return state
  }
}


export default contactsReducer