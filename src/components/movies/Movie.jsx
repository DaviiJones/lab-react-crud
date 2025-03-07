import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage.css";
import "./Movie.css";

function Movie() {
    const [movie, setMovie] = useState({});
    const [loadingError, setLoadingError] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    // Add your handleDelete function here

    return (
        <section className="Movies-movie-wrapper">
            <h2>{movie.title}</h2>
            <section className="Movies-movie">
                {loadingError ? (
                    <ErrorMessage />
                ) : (

                    <aside>
                        <p>
                            <span>Duration:</span> {movie.duration}
                        </p>
                        <p>
                            <span>Listed Categories:</span> {movie.listedIn}
                        </p>
                        <p>
                            <span>Country:</span> {movie.country}
                        </p>
                        <p>
                            <span>Rating:</span> {movie.rating}
                        </p>
                        <p>
                            <span>Date Added:</span> {movie.dateAdded}
                        </p>

                        <article>
                            <p>{movie.description}</p>
                        </article>



                        <button className="delete" onClick={() => handleDelete(movie.id)}>
                            Remove Movie
                        </button>
                        <Link to={`/movies/${id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </aside>
                )}
            </section>
        </section>
    );
}

export default Movie;
