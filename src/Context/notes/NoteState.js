import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  // note stuff
  const [notes, setNotes] = useState([]);



  // get note
  const getNote = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setNotes(json.notes);
  }



  // add note
  const addNote = async (title, description, tag) => {
    // api call
     const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),

      },
      body: JSON.stringify({title, description, tag})
    });
    getNote();
  }





  // delete note
  const deleteNote = async (id) => {
    // api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      }
    });
    getNote();
  }





  // edit note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({title,description,tag})
    });
    getNote();
}




  // login and signup toggle
  const [actionBoxStuff, setActionBoxStuff] = useState('Login');
  const toggleActionBoxLogin = () => {
    setActionBoxStuff('Login');
  }
  const toggleActionBoxSignup = () => {
    setActionBoxStuff('Signup');
  }
  // isloggedin
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  // edit modal toggle
  const [toggleModal, setModal] = useState(false);
  const setToggleModal = () => {
    if (toggleModal) {
      setModal(false);
    }
    else {
      setModal(true);
    }
  }
  //edit value
  const [modalValues, setModalValues] = useState({title:"", description:"", tag:"", id:""});


  return (
    <NoteContext.Provider value={{ notes, actionBoxStuff, toggleActionBoxLogin, toggleActionBoxSignup,getNote, addNote, deleteNote, editNote, toggleModal, setToggleModal, modalValues, setModalValues, isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;