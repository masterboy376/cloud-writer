import React, {useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  let location = useLocation();
    useEffect(()=>{
       
    },[location]);
  return (
    <>
      <nav className="bg-gray-800 flex justify-center items-center opactiy-75 p-3">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-center item-center w-1/3">
            <span className="text-4xl text-purple-100">Cloud Writer</span>
          </div>
          <div className="flex justify-between items-center w-1/3">
            <Link to="/" className={`text-base p-2 rounded-2xl text-purple-100 hover:bg-gray-700 hover:text-purple-100 ${location.pathname==='/'?"bg-gray-700 text-purple-100":""}`}>Home</Link>
            <Link to="/about" className={`text-base p-2 rounded-2xl text-purple-100 hover:bg-gray-700 hover:text-purple-100 ${location.pathname==='/about'?"bg-gray-700 text-purple-100":""}`}>About</Link>
            <div className="flex justify-evenly items-center w-1/2">
              <button type='button' id='login-btn-nav' className='text-mono text-purple-500 text-base text-center p-2 rounded-2xl hover:text-purple-100 hover:bg-purple-500 w-1/3'>Log in</button>
              <button type='button' id='signin-btn-nav' className='text-mono text-purple-100 text-base text-center p-2 border-solid border-2 border-purple-500 rounded-2xl bg-purple-500 w-1/3 hover:bg-purple-600 hover:border-purple-600'>Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
