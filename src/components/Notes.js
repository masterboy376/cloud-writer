import React, { useContext} from 'react';
import noteContext from '../Context/notes/noteContext';

function Notes(props) {
    const context = useContext(noteContext);
    const {deleteNote, setToggleModal, setModalValues}= context;

    return (
        <>
            <div className="w-full rounded my-7 overflow-hidden shadow-lg">
                        <div className="px-6 py-2">
                            <div className="font-bold text-xl mb-2">{props.note.title}</div>
                            <p className="text-gray-700 text-base">
                                {props.note.description}
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-2 flex sm:flex-col justify-between sm:justify-center items-center">
                            <span className="inline-block bg-purple-300 opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2 sm:w-full sm:my-1 sm:mx-2 text-center">#{props.note.tag}</span>
                            <span className="inline-block bg-purple-300 opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2 sm:w-full sm:my-1 sm:mx-2 text-center">{new Date(props.note.date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</span>
                            <div className="flex justify-between items-center">
                                <button onClick={()=>{
                                    setToggleModal()
                                    setModalValues({title:props.note.title, description:props.note.description, tag:props.note.tag, id:props.note._id})
                                    }} type='button' className="bg-transparent mx-3 text-gray-800">
                                <i className="fas fa-edit"></i>
                                </button>
                                <button onClick={()=>{deleteNote(props.note._id
                                    )}} type='button' className="bg-transparent mx-3 text-gray-800">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Notes;
