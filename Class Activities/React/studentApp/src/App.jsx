import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './Counter'
import StateEx from './StateEx'
import { useState } from 'react'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
function App() {

  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/> 
    </Routes>
    </BrowserRouter>
  //    {/* <StateEx name="Anuradha" age="20" course="AIML"/>
  //    <Counter/> 
  //  */}
    
  );
}

export default App
