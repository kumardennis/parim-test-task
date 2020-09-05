import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.scss';
import Header from 'Components/Header/component';
import Inputs from 'Containers/Inputs/container';
import Week from 'Containers/Week/container';
import Footer from 'Components/Footer/component';

require('dotenv').config();

function App() {
  return (
    <div className='App'>
      <Header />
      <Inputs />
      <Week />
      <Footer />
    </div>
  );
}

export default App;
