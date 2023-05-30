const API_KEY = "805b488171f6393dba7f700735da7ab2";

// cria categorias 

const categorias = [
    {
        name : "topRated",
        title: "Em alta",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        grande: false,
    },

    {
        name : "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_network=213`,
        grande: false,
    },


    {
        name : "comedy",
        title: "Comédias",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        grande: false,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        grande: false,
      },
    {
        name : "documentaries",
        title: "Documentários",
        path: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        grande: false,
    }

];

// método para pegar as infos da APIs
// o path é por categoria
export const get = async (path) => {

    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("Deu erro no get",error);
    }
};

export default categorias;