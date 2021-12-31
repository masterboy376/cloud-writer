import React, {useContext, useState} from 'react';
import noteContext from '../Context/notes/noteContext';

function Addnote() {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:""});

    const handleAdd =(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""});

    }
    const onChange =(e)=>{
        setNote({...note, [e.target.name]: e.target.value});
    }

    return (
        <>
            <div className="sm:w-full w-3/4 px-4 py-4 flex flex-col justify-center items-center rounded-lg bg-gray-800 opacity-80 font-sans">
               
                <h1 className="font-sans sm:text-4xl text-5xl text-slate-100 ">Add a note here</h1>
                <div className="sm:w-full w-3/4 sm:px-5 py-2 flex justify-around items-center rounded-lg bg-transparent font-sans">
                    <form action="/" className='flex w-full flex-col justify-center items-start'>

                        <label htmlFor="title" className=' text-slate-100 font-bold text-base mt-3'>Title</label>
                        <input value={note.title} onChange={onChange} spellCheck="false" type="text" name="title" id="title" className='w-full bg-transparent border-b-2 border-b-slate-100 p-2 outline-0 text-slate-100 text-base' placeholder='should not be left empty' minLength={1}/>

                        <label htmlFor="description" className=' text-slate-100 font-bold text-base mt-3'>Description</label>
                        <textarea value={note.description} onChange={onChange} spellCheck="false" name="description" id="description" className='w-full h-28 bg-transparent border-b-2 border-b-slate-100 p-2 outline-0 text-slate-100 text-base' placeholder='should be at least 5 digit long' minLength={5}></textarea>

                        <label htmlFor="tag" className=' text-slate-100 font-bold text-base mt-3'>Tag (optional)</label>
                        <input value={note.tag} onChange={onChange} spellCheck="false" type="text" name="tag" id="tag" className='w-full bg-transparent border-b-2 border-b-slate-100 p-2 outline-0 text-slate-100 text-base' placeholder='should not be left empty' minLength={1}/>

                        <button disabled={note.title.length<2 || note.description.length<6 || note.tag.length<2} onClick={handleAdd} type='submit' id='add-note-btn' className='flex self-end items-center justify-center text-slate-100 text-4xl text-center p-2 mt-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 w-16 h-16 trasition-all hover:scale-110 duration-300'>✓</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Addnote;
