import React from "react";
import "./LibraryBooks.css";

const LibraryBooks = ({ books, onBorrow, onReturn }) => {
  const sortBooks = (books) => {
    return books.sort((a, b) => {
      switch (true) {
        case a.author.toLowerCase() < b.author.toLowerCase():
          return -1;
        case a.author.toLowerCase() > b.author.toLowerCase():
          return 1;
        case a.title.toLowerCase() < b.title.toLowerCase():
          return -1;
        case a.title.toLowerCase() > b.title.toLowerCase():
          return 1;
        default:
          return a.publicationYear - b.publicationYear;
      }
    });
  };

  const sortedBooks = sortBooks(books);

  return (
    <div className="library-books">
      <h3>Trenutne knjige u knjižnici:</h3>
      <table>
        <thead>
          <tr>
            <th>Naslov</th>
            <th>Autor</th>
            <th>Godina izdanja</th>
            <th>Primjerci</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((book) => (
            <tr
              key={book.id}
              style={
                book.copiesAvailable === 0 ? { backgroundColor: "#757575" } : {}
              }
            >
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publicationYear}</td>
              <td>{book.copiesAvailable}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => onBorrow(book.id)}
                  disabled={book.copiesAvailable <= 0}
                >
                  Posudi
                </button>
                <button className="btn" onClick={() => onReturn(book.id)}>
                  Vrati
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryBooks;
