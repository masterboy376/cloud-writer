import React, { useContext, useEffect } from 'react';
import noteContext from '../Context/notes/noteContext';
import Notes from './Notes';

function Notecollection() {
    const context = useContext(noteContext);
    const { notes, getNote} = context;
    useEffect(() => {
        getNote();
    }, [])
    return (
        <>
            <div className="my-4 w-3/4 sm:w-full px-4">
                <h1 className="font-sans my-2 sm:text-4xl text-5xl text-gray-800 ">Your note</h1>
                {(notes.length!==0? notes.map((note) => {
                    return <Notes note={note} key={note._id}/>
                }): <p className="font-sans my-4 w-full sm:text-base text-base text-center text-gray-800 ">No notes here so far!</p>)
            }
                
                

            </div>
        </>
    )
}

export default Notecollection
