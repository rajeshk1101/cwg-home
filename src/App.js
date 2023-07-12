import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Events from './pages/events';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/events' element={<Events />} />
        <Route path='/signin' element={<About />} />
      </Routes>
    </Router>
  );
  //return (<><div>Welcome to cwg portal</div><a href="https://cabinetworksgroup--itedev.sandbox.my.site.com/test">Click here to login to salesforce</a></>);
}

function About() {
  console.log('On redirect');
  window.location.href = 'https://cabinetworksgroup--itedev.sandbox.my.site.com/test';
  return null;
}
export default App;