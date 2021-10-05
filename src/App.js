import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // This piece of code retrieves the data from local storage on page load
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-app-notes-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Persisting the Notes data via local storage
  useEffect(() => {
    localStorage.setItem("react-app-notes-data", JSON.stringify(notes));
  }, [notes]);

  // Adding a new note to the notes list
  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // Deleting a specific note through its id
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="app">
        <Header handleToggle={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={AddNote}
          handleDeleteNote={deleteNote}
          AddNote={AddNote}
        />
      </div>
    </div>
  );
};

export default App;
