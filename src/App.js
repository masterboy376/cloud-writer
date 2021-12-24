import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from './Context/notes/NoteState';

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </Fragment>
        </Router>
      </NoteState>
    </>
  )
}

export default App;
