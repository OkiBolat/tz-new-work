export const GET_CONTACTS = 'GET_CONTACTS'
export const ADD_CONTACT = 'ADD_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
export const SET_AUTH = "SET_AUTH"
export const EDIT_CONTACT = 'EDIT_CONTACT'

export const addContacts = (payload) => ({
  type: ADD_CONTACT,
  payload
})

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload
})

export const setAuthorized = (payload) => ({
    type: SET_AUTH,
    payload
})

export const editContact = (payload) => ({
  type: EDIT_CONTACT,
  payload
})