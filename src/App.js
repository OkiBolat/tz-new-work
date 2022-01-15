import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/auth/AuthPage';
import Contacts from './pages/contacts/Contacts';





const App = () => {


  return <div className='container'>
    <Routes>

      <Route path='/login' element={<AuthPage />} />
        <Route path='/contacts' element={<Contacts/>} />
    </Routes>
  </div>
}



export default App;
