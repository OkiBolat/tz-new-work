import {contactsAPI} from "../../api/api"
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACTS } from "./actions"

export const getContacts = (payload) => ({
  type: GET_CONTACTS,
  payload
})

export const addContacts = (payload) => ({
  type: ADD_CONTACT,
  payload
})

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload
})

export const editContact = (payload) => ({
  type: EDIT_CONTACT,
  payload
})

export const getContactsThunk = () => {
  return (dispatch) => {
   contactsAPI.getContacts().then(response => {
     dispatch(getContacts(response))
   })
   
  }
}
export const addContactThunk = (formData) => {
  return (dispatch) => {
   contactsAPI.addNewContact(formData).then(response => {
     dispatch(addContacts(response.data))
   })
   
  }
}
export const deleteContactThunk = (id) => {
  return (dispatch) => {
   contactsAPI.deleteContact(id).then(response => {
     dispatch(deleteContact({id}))
   })
   
  }
}

export const editContactThunk = (payload) => {
  return (dispatch) => {
    contactsAPI.updateContact(payload).then(() => {
      dispatch(editContact(payload))
    })
  }
}

