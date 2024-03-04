import React, { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import LibraryBooks from "./components/LibraryBooks";
import "./App.css";
import initialBooks from "./initialBooks";

function App() {
  const [allBooks, setAllBooks] = useState(initialBooks);

  const handleAddBook = (bookData) => {
    const newBookList = [...allBooks, bookData];
    setAllBooks(newBookList);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">KNJIŽNICA</h1>
      </header>
      <h2 className="main-heading">Dodavanje nove knjige</h2>
      <AddBookForm onAddBook={handleAddBook} />
      {/* Trenutne knjige u knjižnici */}
      <LibraryBooks books={allBooks} />
    </div>
  );
}

export default App;
