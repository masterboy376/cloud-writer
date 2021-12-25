import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/notes/noteContext'
import Noteitem from './Noteitem';


function Notes() {
    
    const context = useContext(noteContext);
    const {notes, setNotes}= context;
    return (
        <>
            <div className="container mt-3 mb-3">
                <h1 className="display-4 text-center">Your typed notes</h1>
                {notes.map((note)=>{
                    return <Noteitem note={note}/>
                })}
            </div>
        </>
    )
}

export default Notes;
