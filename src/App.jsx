import React, { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import LibraryBooks from "./components/LibraryBooks";
import BookFilter from "./components/BookFilter";
import "./App.css";
import initialBooks from "./initialBooks";

function App() {
  const [allBooks, setAllBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  const handleAddBook = (bookData) => {
    const newBookList = [...allBooks, bookData];
    setAllBooks(newBookList);
    setFilteredBooks(newBookList);
  };

  const handleFilter = ({ searchTerm, genre }) => {
    let filtered = [...allBooks];

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (genre !== "") {
      filtered = filtered.filter((book) => book.genre === genre);
    }

    setFilteredBooks(filtered);
  };

  const handleBorrowBook = (id) => {
    setAllBooks(
      allBooks.map((book) =>
        book.id === id
          ? { ...book, copiesAvailable: Math.max(0, book.copiesAvailable - 1) }
          : book
      )
    );
    setFilteredBooks(
      filteredBooks.map((book) =>
        book.id === id
          ? { ...book, copiesAvailable: Math.max(0, book.copiesAvailable - 1) }
          : book
      )
    );
  };

  const handleReturnBook = (id) => {
    setAllBooks(
      allBooks.map((book) =>
        book.id === id
          ? { ...book, copiesAvailable: book.copiesAvailable + 1 }
          : book
      )
    );
    setFilteredBooks(
      filteredBooks.map((book) =>
        book.id === id
          ? { ...book, copiesAvailable: book.copiesAvailable + 1 }
          : book
      )
    );
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">KNJIŽNICA</h1>
      </header>
      <h2 className="main-heading">Dodavanje nove knjige</h2>
      <AddBookForm onAddBook={handleAddBook} />
      {}
      <LibraryBooks
        books={filteredBooks}
        onBorrow={handleBorrowBook}
        onReturn={handleReturnBook}
      />
      <BookFilter onFilter={handleFilter} />
    </div>
  );
}

export default App;
