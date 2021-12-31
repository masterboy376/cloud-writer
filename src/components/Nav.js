import React, { useContext, useState } from 'react';
import noteContext from '../Context/notes/noteContext';
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  let location = useLocation();

  //toggling between Signup and Login componenet
  const context = useContext(noteContext);
  const { toggleActionBoxLogin, toggleActionBoxSignup, isLoggedIn, setIsLoggedIn } = context;
  // const toggleActionBoxSignup = context.toggleActionBoxSignup;

  //creating a state to toggle hidden menu. if this is true the menu is hidden.
  const [toggeleHidden, setToggeleHidden] = useState(true);

  //function to toggle hidden menu
  const toggleHiddenFunction = () => {
    if (toggeleHidden) {
      setToggeleHidden(false);
    }
    else {
      setToggeleHidden(true);
    }
  }

  //function to log out
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');

  }


  return (
    <>
      {/* nav */}
      <nav className="bg-gray-800 fixed top-0 left-0 flex justify-center items-center w-full z-30 p-2 opacity-85">
        {/* main div */}
        <div className="flex justify-between items-center w-full sm:flex-col sm:justify-center sm:items-start">
          {/* top nav in small devices */}
          <div className="flex justify-between items-center w-full ">
            {/* logo div */}
            <div className="flex justify-start item-center sm:w-1/2 md:w-1/2 lg:w-1/3 xl:1/2 2xl:w-1/5">
              <span className="text-3xl pl-3 text-slate-100 sm:text-lg">Cloud Writer</span>
            </div>

            {/* menu div */}
            <div className="flex justify-between items-center sm:w-1/2 md:w-1/2 lg:w-1/3 xl:1/3 2xl:w-1/5">
              {/* hamburger menu */}
              <div className="sm:flex sm:justify-end sm:items-center pr-3 2xl:hidden w-full">
                <button type='button' id='toggle-btn' onClick={toggleHiddenFunction} className='text-slate-100 text-3xl text-center pb-2 rounded-full hover:text-purple-500 focus:text-purple-500'>≡</button>
              </div>
              {/* large options */}
              <div className="flex justify-between items-center sm:hidden w-full">
                <Link to="/" className={`text-center text-base p-2 rounded-2xl w-1/5 text-slate-100 hover:bg-gray-700 hover:text-slate-100 ${location.pathname === '/' ? "bg-gray-700 text-slate-100" : ""}`}>Home</Link>
                <Link to="/about" className={`text-center text-base p-2 rounded-2xl w-1/5 text-slate-100 hover:bg-gray-700 hover:text-slate-100 ${location.pathname === '/about' ? "bg-gray-700 text-slate-100" : ""}`}>About</Link>
                <>
                  {isLoggedIn ?
                    <Link to="/" onClick={handleLogout} className='text-slate-100 text-base text-center p-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 w-1/2 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-slate-100'>log out</Link>
                    :
                    <>
                      <Link to="/" onClick={toggleActionBoxLogin} className='text-purple-500 text-base text-center p-2 rounded-2xl w-1/4 hover:text-slate-100 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500'>Log in</Link>
                      <Link to="/" onClick={toggleActionBoxSignup} className='text-slate-100 text-base text-center p-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 w-1/4 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-slate-100'>Sign up</Link>
                    </>
                  }
                </>
              </div>

            </div>
          </div>

          {/* small options */}
          <div className={`sm:${toggeleHidden ? 'hidden' : 'flex'} sm:justify-center pt-2 sm:items-center sm:flex-col 2xl:hidden w-full`}>
            <Link to="/" className={`sm:w-full sm:mt-1 text-center text-base p-2 rounded-2xl text-slate-100 hover:bg-gray-700 hover:text-slate-100 ${location.pathname === '/' ? "bg-gray-700 text-slate-100" : ""}`}>Home</Link>
            <Link to="/about" className={`sm:w-full sm:mt-1 text-center text-base p-2 rounded-2xl text-slate-100 hover:bg-gray-700 hover:text-slate-100 ${location.pathname === '/about' ? "bg-gray-700 text-slate-100" : ""}`}>About</Link>
            <>
              {isLoggedIn ?
                <Link to="/" onClick={handleLogout} className='sm:w-full sm:mt-1 text-slate-100 text-base text-center p-2  rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 w-1/4 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-slate-100'>Log out</Link>
                :
                <>
                  <Link to="/" onClick={toggleActionBoxLogin} className='sm:w-full sm:mt-1 text-purple-500 text-base text-center p-2 rounded-2xl w-1/4 hover:text-slate-100 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500'>Log in</Link>
                  <Link to="/" onClick={toggleActionBoxSignup} className='sm:w-full sm:mt-1 text-slate-100 text-base text-center p-2  rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 w-1/4 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-slate-100'>Sign up</Link>
                </>
              }
            </>

          </div>

        </div>
        <hr className='text-gray-900' />
      </nav>
    </>
  )
}
