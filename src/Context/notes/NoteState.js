import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial= [
          {
            "_id": "61c33d2d6f654865b10567ff",
            "user": "61c1d6da2efe27fa5f5b2f3e",
            "title": "kath's second note",
            "description": "my namae is kath2.0",
            "tag": "Random",
            "date": "2021-12-22T14:58:53.507Z",
            "type": "Typed",
            "isImp": false,
            "__v": 0
          },
          {
            "_id": "61c46e34a2011205a168c343",
            "user": "61c1d6da2efe27fa5f5b2f3e",
            "title": "kath's fourth note",
            "description": "I am so henski",
            "tag": "Random",
            "date": "2021-12-23T12:40:20.662Z",
            "type": "Typed",
            "isImp": false,
            "__v": 0
          }
        ]
      const [notes,setNotes]=useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;