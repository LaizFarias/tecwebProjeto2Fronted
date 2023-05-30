import React, { useEffect } from "react";
import categorias, {get} from "../api";
import "./stile_destaque.css";


function Destaque() {
  const [movie, setMovies] = React.useState({});

  function saveFilme(movie) {
    const filme = {
      name: movie.name,
      backdrop_path: movie.backdrop_path
    };
  
    fetch('http://127.0.0.1:8000/Filmes/filme/', {
      method: "POST",
      body: JSON.stringify(filme),
      headers: {
        "Content-Type": "application/json"
      },  
    })
    .then(response => {
      if (response.status === 200) {
        console.log("Filme salvo com sucesso!")
      } else {
        console.log("Erro ao salvar filme!")
      }
    })
    .catch(error => {
      console.log('Erro na requisição: ', error)
    })
  }



  const filmealeatorio = async () => {
    try {
      const data = await get(
        categorias.find((category) => category.name === "netflixOriginals").path
      );
      const pega_um_filme = Math.floor(Math.random() * data?.results.length);
      setMovies(data?.results[pega_um_filme]);
    } catch (error) {
      console.log("deu ruim", error);
    }
  };
  useEffect(() => {
    filmealeatorio();
  }, []);

  function arruma_texto(str, n) {
    return str?.length > n ? str?.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="destaque-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="destaque-content">
        <h1 className="destaque-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="destaque-boton-conteiner">
          <button className="destaque-boton" onClick={() => saveFilme(movie)}>
            Curti
          </button>
        </div>
        <div className="destaque-description">
          <h2>{arruma_texto(movie?.overview, 150)}</h2>
        </div>
      </div>
    </header>
  );
}

export default Destaque;