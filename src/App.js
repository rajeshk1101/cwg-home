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
        <Route path='/signin' element={<CWG />} />
        <Route path='/cwg' element={<CWGDIRECT />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
  //return (<><div>Welcome to cwg portal</div><a href="https://cabinetworksgroup--itedev.sandbox.my.site.com/test">Click here to login to salesforce</a></>);
}

function CWG() {
  console.log('On redirect');
  window.location.href = 'https://cabinetworksgroup--data2.sandbox.my.site.com/cwg/services/auth/sso/Azure_AD_B2C';
  return null;
}
function CWGDIRECT() {
  console.log('On redirect');
  window.location.href = 'https://cabinetworksgroup--data2.sandbox.my.site.com/cwg/s/';
  return null;
}
function Logout() {
  console.log('On redirect');
  window.location.href = '/.auth/logout';
  return null;
}
export default App;