import React, { useState } from "react";
import "./BookFilter.css";

const BookFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleFilter = () => {
    onFilter({ searchTerm, genre });
  };

  return (
    <div className="book-filter">
      <h3>Filter</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={genre} onChange={handleGenreChange}>
        <option value="">All Genres</option>
        <option value="roman">Roman</option>
        <option value="poezija">Poezija</option>
        <option value="drama">Drama</option>
        <option value="fantazija">Fantazija</option>
        <option value="znanstvena_fantastika">Znanstvena fantastika</option>
        <option value="biografija">Biografija</option>
      </select>
      <button onClick={handleFilter}>Filtriraj</button>
    </div>
  );
};

export default BookFilter;
