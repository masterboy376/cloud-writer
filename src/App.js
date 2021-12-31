import './App.css';
import './Custom.css';
import NoteState from './Context/notes/NoteState';
import App2 from './App2';


import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Nav from './components/Nav';
// import About from './components/About';
// import NoteState from './Context/notes/NoteState';
// import Cover from './components/Cover';
// import Footer from './components/Footer';
// import Main from './components/Main';

const App = () => {

  return (
    <>
      <NoteState>
        <App2/>
        {/* <Router>
          <Fragment>
            <Nav />
            <Routes>
              <Route exact path='/' element={<Main/>} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </Fragment>
          <Footer/>
        </Router> */}
      </NoteState>
    </>
  )
}

export default App;
