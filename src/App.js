import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  Navbar from './components/Navbar';
import  Contact  from "./components/Contact";
import  GitHub  from "./components/GitHub";
import  LinkedIn  from './components/LinkedIn';
import  Resume  from './components/Resume';
import Projects  from './components/Projects';
import Home from './components/Home';


const App = () => {
  
  
    return (
        <div>
            <Navbar  />
            <Routes>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/GitHub' element={<GitHub/>}/>
              <Route path='/LinkedIn' element={<LinkedIn/>}/>
              <Route path='/Resume' element={<Resume/>}/>
              <Route path='/Projects' element={<Projects/>}/>
            </Routes>
            <h1>Welcome to my React App!</h1>
            <p>This is a sample React application.</p>
        </div>
    );
}

export default App;
