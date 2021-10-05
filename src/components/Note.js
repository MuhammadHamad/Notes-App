import React, { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import { nanoid } from "nanoid";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    height: 100,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Note({ text, date, id, handleDeleteNote }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(text);

  const updateNote = () => {
    // const newNote = {
    //   text: input,
    //   id: nanoid(),
    // };
    // setNotes(newNote);
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        {/* This div is what is inside the modal */}
        <div className={classes.paper}>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={updateNote}> Update Note </button>
        </div>
      </Modal>
      <div className="note">
        <span>{text}</span>
        <div className="note-footer">
          <p>{date}</p>
          <EditIcon className="edit" onClick={(e) => setOpen(true)} />
          <DeleteForeverIcon
            className="delete-icon"
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
