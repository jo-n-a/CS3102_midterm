// App.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteForm from "./NoteForm";
import notesData from "./notes";
import { useNoteFunctions } from "./NoteFunctions";

function App() {
  const { notes, addNote, deleteNote } = useNoteFunctions(notesData);

  return (
    <div className="App">
      <Header />
      <NoteForm onAddNote={addNote} />
      <main className="notes-container">
        {notes.map((note) => (
          <Note
            key={note.key}
            id={note.key}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
