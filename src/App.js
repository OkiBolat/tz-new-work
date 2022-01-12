import React from 'react';
import './App.css';
import AuthPage from './components/AuthPage.jsx';
import ContactList from './components/ContactList';


const contacts = [
  {
    name: "Bulat",
    mail: 'ganster@oil.com',
    phone: '8989-900-91-54'
  },
  {
    name: "Bulat",
    mail: 'ganster@oil.com',
    phone: '8989-900-91-54'
  },
  {
    name: "Bulat",
    mail: 'ganster@oil.com',
    phone: '8989-900-91-54'
  },
  {
    name: "Bulat",
    mail: 'ganster@oil.com',
    phone: '8989-900-91-54'
  },
]



const App = () => {
  return <div>
    <AuthPage />
    <ContactList contacts={contacts}/>
  </div>
}
  


export default App;
