import React, {useContext} from "react";
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
  let style = {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    height: "auto",
    display: "flex",
    flexWrap: "wrap"
  };
  let stylediv = {
      width:"50%",
      textAlign: "center",
      minWidth: "300px",
      margin:"0 auto"
  }
  return (
    <div style={style}>
      <div style={stylediv}>
        <h2>Valentino</h2>
      </div>
      <div style={stylediv}>
        <h2>List of Movies : {movies.length}</h2>
      </div>
    </div>
  );
};

export default Nav;
