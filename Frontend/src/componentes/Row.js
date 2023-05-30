import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import {get} from '../api';
import "./stile_row.css"

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, path, grande }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");

  useEffect(() => {
    const get_Movies = async () => {
      try {
        const res = await get(path);
        setMovies(res.results);
      } catch (error) {
        console.log("Deu erro no get_Movies", error);
      }
    };
    get_Movies();
  }, [path]);

  const vai_pro_filme = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name || "")
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => {
          console.log("Deu ruim no trailer: ", error);
        });
    }
  };

  const pega_filme = () => {
    return movies.map((movie) => (
      <img
        key={movie.id}
        className={`movie ${grande && "movie_grande"}`}
        onClick={() => vai_pro_filme(movie)}
        src={`${imageBaseUrl}${grande ? movie.backdrop_path : movie.poster_path}`}
        alt={movie.name}
      />
    ));
  }

  return (
    <div className="container">
      <h2 className="header">{title}</h2>
      <div className="cards">{pega_filme()}</div>
      {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
    </div>

  );
}

export default Row;