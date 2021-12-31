import React, { useContext, useState} from 'react';
import noteContext from '../Context/notes/noteContext';

function Editmodal() {
    const context = useContext(noteContext);
    const { toggleModal, setToggleModal, modalValues, setModalValues, editNote } = context;

    const onEditSave = (e) => {
        e.preventDefault();
        editNote(modalValues.id, modalValues.title, modalValues.description, modalValues.tag);
        setModalValues({ title: "", description: "", tag: "" });
        setToggleModal();
    }
    const onChange = (e) => {
        setModalValues({ ...modalValues, [e.target.name]: e.target.value});
    }

    return (
        <>
            <div className={`min-h-screen fixed top-0 left-0 w-full ${toggleModal ? 'flex' : 'hidden'} z-10 justify-center items-center bg-gray-600 bg-opacity-70`}>
                <div className="sm:w-full h-1/3 w-3/4 mt-4 px-4 sm:mx-4 py-4 flex flex-col justify-center items-center rounded-lg bg-gray-800 font-sans">
                   
                    <h1 className="font-sans sm:text-4xl text-5xl text-slate-100 ">Update your note</h1>

                    <div className="sm:w-full w-3/4 sm:px-5 py-2 flex justify-around items-center rounded-lg bg-transparent font-sans">
                        <form action="/" className='flex w-full flex-col justify-center items-start'>

                            <label htmlFor="title" className=' text-slate-100 font-bold text-base mt-3'>Title</label>
                            <input value={modalValues.title} onChange={onChange} spellCheck="false" type="text" name="title" id="title" className='w-full bg-transparent border-b-2 border-b-slate-100 p-2 outline-0 text-slate-100 text-base' placeholder='should not be left empty' minLength={1}/>

                            <label htmlFor="description" className=' text-slate-100 font-bold text-base mt-3'>Description</label>
                            <textarea value={modalValues.description} onChange={onChange} spellCheck="false" name="description" id="description" className='w-full h-28 bg-transparent border-b-2 border-b-slate-100 p-2 outline-0 text-slate-100 text-base' placeholder='should be at least 5 digit long' minLength={5}></textarea>

                            <label htmlFor="tag" className=' text-slate-100 font-bold text-base mt-3'>Tag (optional)</label>
                            <input value={modalValues.tag} onChange={onChange} spellCheck="false" type="text" name="tag" id="tag" className='w-full bg-transparent border-b-2 border-b-slate-100 p-2 outline-0 text-slate-100 text-base' placeholder='should not be left empty' minLength={1}/>

                            <div className="flex items-center w-full px-4 justify-between sm:px-2">
                                <button onClick={() => {
                                    setModalValues({ title: "", description: "", tag: "" });
                                    setToggleModal()
                                }
                                } type='button' id='add-note-btn' className='flex self-end items-center justify-center text-slate-100 text-4xl text-center p-2 mt-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 w-16 h-16 trasition-all hover:scale-110 duration-300'>✕</button>
                                <button disabled={modalValues.title.length<2 || modalValues.description.length<6 || modalValues.tag.length<2} onClick={onEditSave} type='submit' id='add-note-btn' className='flex self-start items-center justify-center text-slate-100 text-4xl text-center p-2 mt-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 w-16 h-16 trasition-all hover:scale-110 duration-300'>✓</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editmodal
