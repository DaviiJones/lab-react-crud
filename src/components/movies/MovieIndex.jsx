// import { Link } from "react-router-dom";

import ErrorMessage from "./src/errors/ErrorMessage";

import "./MovieIndex.css";

export default function MovieIndex() {
  return <p>Movie List</p>;
}
  return (
    <div>
      {false ? (
        <ErrorMessage />
      ) : (
        <section className="movie-index-wrapper">
          <h2>All movie</h2>
          <button>
            {/* <Link to="/movies/new">Add a new movie</Link> */}
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movie:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="movie-index">
            {/* <!-- movieListing components --> */}
          </section>
        </section>
      )}
    </div>
  );
      
 
  
