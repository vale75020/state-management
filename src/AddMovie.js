import React, { useState, useContext } from "react";
import { MovieContext } from './MovieContext'

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, price: price}]);
  };

  let style = {
    minWidth: "300px",
    fontSize: "18px",
    padding: "2px",
    margin: "10px auto"
  };

  let styleForm = {
    border: "1px solid black",
    margin: "10px auto",
    width: "310px",
    padding: "10px"
  }

  return (
    <form onSubmit={addMovie} style={{styleForm}}>
      <h2>Add your movie</h2>
      <input
        placeholder="Name of the movie"
        style={style}
        type="text"
        name="name"
        value={name}
        onChange={updateName}
      />
      <br />
      <input
        placeholder="Price of the movie"
        style={style}
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
      />
      <br />
      <button style={style}>Submit</button>
    </form>
  );
};

export default AddMovie;
