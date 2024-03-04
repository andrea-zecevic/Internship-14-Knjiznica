import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddBookForm.css";

const AddBookForm = ({ onAddBook }) => {
  const [bookData, setBookData] = useState({
    id: uuidv4(),
    title: "",
    author: "",
    image: "",
    publisher: "",
    publicationYear: "",
    genre: "",
    copiesAvailable: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !bookData.title ||
      !bookData.author ||
      !bookData.publisher ||
      !bookData.publicationYear ||
      !bookData.copiesAvailable
    ) {
      alert("Sva polja su obavezna!");
      return;
    }
    onAddBook(bookData);
    setBookData({
      id: uuidv4(),
      title: "",
      author: "",
      image: "",
      publisher: "",
      publicationYear: "",
      genre: "roman",
      copiesAvailable: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="title"
        value={bookData.title}
        onChange={handleChange}
        placeholder="Naslov knjige"
        className="input-field"
      />
      <input
        type="text"
        name="author"
        value={bookData.author}
        onChange={handleChange}
        placeholder="Autor"
        className="input-field"
      />
      <input
        type="text"
        name="image"
        value={bookData.image}
        onChange={handleChange}
        placeholder="Naslovna slika (URL)"
        className="input-field"
      />
      <input
        type="text"
        name="publisher"
        value={bookData.publisher}
        onChange={handleChange}
        placeholder="Izdavačka kuća"
        className="input-field"
      />
      <input
        type="number"
        name="publicationYear"
        value={bookData.publicationYear}
        onChange={handleChange}
        placeholder="Godina izdavanja"
        className="input-field"
      />
      <select
        name="genre"
        value={bookData.genre}
        onChange={handleChange}
        className="input-field"
      >
        <option value="roman">Roman</option>
        <option value="poezija">Poezija</option>
        <option value="drama">Drama</option>
        <option value="fantazija">Fantazija</option>
        <option value="znanstvena_fantastika">Znanstvena fantastika</option>
        <option value="biografija">Biografija</option>
      </select>
      <input
        type="number"
        name="copiesAvailable"
        value={bookData.copiesAvailable}
        onChange={handleChange}
        placeholder="Broj primjeraka dostupan u knjižnici"
        className="input-field"
      />
      <button className="submit-button" type="submit">
        Dodaj knjigu
      </button>
    </form>
  );
};

export default AddBookForm;
