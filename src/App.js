import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router>
  );
  //return (<><div>Welcome to cwg portal</div><a href="https://cabinetworksgroup--itedev.sandbox.my.site.com/test">Click here to login to salesforce</a></>);
}

export default App;