import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
})

export const contactsAPI = {
  async getContacts() {
    const response = await instance('/contacts');
    return response.data;
  },
  updateContact(data) {
    return instance.put('/contacts/' + data.id, data)
  },
  addNewContact(formData){
    return instance.post('/contacts', formData)
  },

  deleteContact(id){
    return instance.delete('/contacts/' + id)
  }
}


export const profileAPI = {

  authMe() {
    return instance('auth/me')
  },
  authLogin(formData) {
    return instance.post('/auth/login', formData)
  },
  logout() {
    return instance.delete('/auth/login')
  }
}
