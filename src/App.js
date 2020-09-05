import React from 'react';
import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.scss';
import Header from 'Components/Header/component';
import Inputs from 'Containers/Inputs/container';
import Week from 'Containers/Week/container';

require('dotenv').config();

function App() {
  return (
    <div className='App'>
      <Header />
      <Inputs />
      <Week />
    </div>
  );
}

export default App;
