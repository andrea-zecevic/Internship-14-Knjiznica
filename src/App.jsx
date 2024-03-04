import React, { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import "./App.css";

function App() {
  const [libraryBooks, setLibraryBooks] = useState([]);

  const handleAddBook = (bookData) => {
    const updatedBooks = [...libraryBooks];
    updatedBooks.push(bookData);
    setLibraryBooks(updatedBooks);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">KNJIŽNICA</h1>
      </header>
      <h2 className="main-heading">Dodavanje nove knjige</h2>
      <AddBookForm onAddBook={handleAddBook} />
      {/* Trenutne knjige u knjižnici */}
      <h3 className="sub-heading">Trenutne knjige u bazi:</h3>
      <ul>
        {libraryBooks.map((book, index) => (
          <li key={index}>
            {book.title} - {book.author} - {book.copiesAvailable}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
