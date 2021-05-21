import fetch from "node-fetch";
 
const API_URL = "https://yts.mx/api/v2/list_movies.json?";


export const getMovies = ( limit, rating ) => {

   let REQUEST_URL = API_URL;
   if(limit > 0) {
        REQUEST_URL += `limit=${limit}`;
   }
    if(rating > 0) {
        REQUEST_URL += `minimum_rating=${rating}`;
    }

    return fetch(REQUEST_URL).then(res => res.json()).then(json => json.data.movies);
}

/*
 export let movies = [
    {
      id: 0,
      name: "nico",
      score: 1
  },{
      id: 1,
      name: "jake",
      score: 12
  },{
      id: 2,
      name: "gani",
      score: 33
  },{
      id: 3,
      name: "azryn",
      score: 44
  },{
      id: 4,
      name: "olando",
      score: 55
  },{
      id: 5,
      name: "corin",
      score: 53
  },{
      id: 6,
      name: "guy",
      score: 3
  },]

export const getMovies = () => movies;

export const getById = (id : number) => {
      const filteredMovies = movies.filter(movie => movie.id === id);
      return filteredMovies[0];
}

export const deleteMovie = (id : number) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if( movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score,
    };
    movies.push(newMovie);
    return newMovie
}
*/