// NoteFunctions.js
import { useState } from "react";

export function useNoteFunctions(initialNotes) {
  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.key !== id));
  }

  return {
    notes,
    addNote,
    deleteNote,
  };
}
