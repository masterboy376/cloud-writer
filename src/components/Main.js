import React from 'react';
import Addnote from './Addnote'
import Editmodal from './Editmodal';
import Notecollection from './Notecollection'

function Main() {

    return (
        <>
            <div className="min-h-screen pt-20 sm:px-5 w-full bg-gradient-to-r from-violet-400 to-fuchsia-400 flex flex-col justify-evenly items-center">
                <Addnote/>
                <Notecollection/>
                <Editmodal />
            </div>
        </>
    )
}

export default Main
