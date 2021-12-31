import React, {useContext} from 'react';
import noteContext from '../Context/notes/noteContext';
import Login from './Login';
import Signup from './Signup';

function Cover() {
    const context = useContext(noteContext);
    const actionBoxStuff= context.actionBoxStuff;
    const toggleActionBoxLogin = context.toggleActionBoxLogin;
    const toggleActionBoxSignup = context.toggleActionBoxSignup;
    return (
        <>
            <div className="custom-cover min-h-screen w-full bg-no-repeat bg-cover bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-around items-center sm:flex-col sm:justify-center sm:items-center">
                {/* text box */}
                <div className="sm:w-full sm:h-1/2 h-full w-1/2 p-4 sm:mt-10 sm:pt-10 text-center flex flex-col justify-center items-center">
                    <p className="font-sans text-slate-100 text-7xl sm:text-4xl sm:font-semibold font-bold">Welcome to</p>
                    <p className="font-sans text-slate-100 text-7xl sm:text-4xl sm:font-semibold font-bold">Cloud Writer!</p>
                    <p className="font-sans text-slate-100 text-xl font-semibold sm:text-base sm:font-medium">Keep your notes handy and secure on the clouds with Cloud Writer.</p>
                </div>

                {/* action box */}
                <div id='action-box' className="sm:w-full sm:h-1/2 h-full w-1/2 p-4 flex justify-around items-center">
                    {actionBoxStuff==='Login'?<Login toggleActionBoxSignup={toggleActionBoxSignup}/>:<Signup toggleActionBoxLogin={toggleActionBoxLogin}/>}
                </div>


            </div>
        </>
    )
}

export default Cover;
