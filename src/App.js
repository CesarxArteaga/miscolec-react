import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'
import Albumes from './components/Albumes'

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Albumes></Albumes>
    </React.Fragment>
  );
}

export default App;
