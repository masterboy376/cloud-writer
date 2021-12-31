import React, { useState, useContext} from 'react';
import noteContext from '../Context/notes/noteContext';

function Signup(props) {

    const context = useContext(noteContext);
    const { setIsLoggedIn } = context;
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cPassword: "" });


    const handleSubmit = async (e) => {
        e.preventDefault();

            if (credentials.password === credentials.cPassword) {
                //creating user
                const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
                });
                const json = await response.json();
                localStorage.setItem('token', json.authToken);
                setCredentials({ name: "", email: "", password: "" });//this should happan before the component unmount
                setIsLoggedIn(true);
            }
            else {
            }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div id='signup-box' className="sm:w-full w-3/4 px-4 py-2 flex justify-around items-center rounded-lg bg-gray-800 opacity-80 font-sans">

                <form onSubmit={handleSubmit} action="/" className='flex w-full flex-col justify-center items-start'>
                    <p className="w-full text-slate-100 text-4xl text-center">Sign up</p>

                    <label htmlFor="name" className='text-slate-100 text-base mt-2'>Name</label>
                    <input required minLength={1} onChange={onChange} type="text" name="name" id="name" className='w-full bg-transparent border-b-2 border-b-purple-500 p-2 outline-0 text-slate-100 text-base' />

                    <label htmlFor="email" className='text-slate-100 text-base mt-2'>Email</label>
                    <input required minLength={1} onChange={onChange} type="email" name="email" id="email" className='w-full bg-transparent border-b-2 border-b-purple-500 p-2 outline-0 text-slate-100 text-base' />

                    <label htmlFor="password" className='text-slate-100 text-base mt-2'>Password</label>
                    <input required minLength={6} onChange={onChange} type="password" name="password" id="password" className='w-full bg-transparent border-b-2 border-b-purple-500 p-2 outline-0 text-slate-100 text-base' />

                    <label htmlFor="cPassword" className='text-slate-100 text-base mt-2'>Confirm password</label>
                    <input required minLength={6} onChange={onChange} type="password" name="cPassword" id="cPassword" className='w-full bg-transparent border-b-2 border-b-purple-500 p-2 outline-0 text-slate-100 text-base' />

                    <button type='submit' id='signup-final-btn' className='text-slate-100 text-base text-center p-2 mt-3 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600'>Sign up</button>

                    <p className="w-full text-slate-100 text-base text-center">Already have an account? <button onClick={props.toggleActionBoxLogin} type='button' id='login-btn-cover' className='text-purple-500 text-base text-center p-2 bg-transparent mt-3 hover:underline hover:text-decoration-3 hover:decoration-solid hover:decoration-purple-500'>Log in</button></p>

                </form>

            </div>
        </>
    )
}

export default Signup
