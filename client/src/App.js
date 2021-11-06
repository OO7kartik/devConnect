import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <section className='container'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </section>
    </Fragment>
  </Router>
);

export default App;
