import React, { Fragment, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import noteContext from './Context/notes/noteContext';

import Nav from './components/Nav';
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Main from './components/Main';

const App2 = () => {
    const context = useContext(noteContext);
    const { isLoggedIn } = context;

    return (
      <>
          <Router>
            <Fragment>
              <Nav />
              <Routes>
                <Route exact path='/' element={isLoggedIn?<Main/>:<Cover/>} />
                <Route exact path='/about' element={<About />} />
              </Routes>
            </Fragment>
            <Footer/>
          </Router>
      </>
    )
  }
  
  export default App2;