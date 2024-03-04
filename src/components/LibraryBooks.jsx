import React from "react";
import "./LibraryBooks.css";

const LibraryBooks = ({ books }) => {
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
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publicationYear}</td>
              <td>{book.copiesAvailable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryBooks;
