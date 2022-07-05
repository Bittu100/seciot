import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Analise from './components/Analise';
import Scan from './components/Scan';
import  Ptest from './components/Ptest';
import Logout from './components/Logout';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    
    <Route  path='/' element={<Home/>}/>
    
    <Route  path='/contact' element={<Contact/>}/>

    <Route  path='/explore' element={<About/>}/>

    <Route  path='/login' element={<Login/>}/>

    <Route  path='/signup' element={<Signup/>}/>

    <Route  path='/analise' element={<Analise/>}/>

    <Route  path='/scan' element={<Scan/>}/>

    <Route  path='/ptest' element={<Ptest/>}/>

    <Route  path='/logout' element={<Logout/>}/>
  </Routes>
  
    
    </BrowserRouter>
  )
}

export default App
