import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './components/authPage/AuthPage.jsx';
import ContactListContainer from './components/contactsPage/ContactListContainer'





const App = () => {
  return <div className='container'>
    <Routes>

      <Route path='/auth' element={<AuthPage />} />
        <Route path='/contacts' element={<ContactListContainer />} />
    </Routes>
  </div>
}



export default App;
