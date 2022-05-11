import { Link } from "react-router-dom";
import MovieScore from "../MovieScore";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://i.ytimg.com/vi/q46C3ERrHkg/maxresdefault.jpg",
        title: "Arn - O Cavaleiro Templário (2007)",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    );
}

export default MovieCard;