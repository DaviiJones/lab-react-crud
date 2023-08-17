import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./movies/Movie.css";

import ErrorMessage from "../errors/ErrorMessage";

function Movie() {}

const [movie, setMovie] = useState({});
const [loadingError, setLoadingError] = useState(false);

const { id } = useParams();
const navigate = useNavigate();
export default Movie;