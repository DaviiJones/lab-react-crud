import {Link} from 'react-router-dom'
import "./MovieListing.css";

export default function MovieListing({ Movie }) {
return (
    <article className="movie">
      <h3 className="title">
        <Link to={`/movies/${Movie.id}`}>{Movie.title}</Link>
      </h3>
      <p className="description">{Movie.description}</p>
      <aside className="details">
        <p>
        <span>Listed Categories:</span>
          {Movie.listedIn}
        </p>
        <p>
          <span>Duration:</span> {Movie.duration}
        </p>
      </aside>
    </article>
    );
}