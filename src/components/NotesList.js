import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note 
            text={note.text}
            date={note.date}
            id={note.id}
            handleDeleteNote={handleDeleteNote}
            notes={notes}
         />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
