import React from "react";
import { useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Alien",
      Year: "1979",
      imdbID: "tt0078748",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "Alien³",
      Year: "1992",
      imdbID: "tt0103644",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTNiYmQzNTctNzAyZC00ODY2LWE3ZjgtODU1NDA0NGI5ZDY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Alien: Covenant",
      Year: "2017",
      imdbID: "tt2316204",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzVkMjRhNzctOGQxMC00OGE2LWJhN2EtNmYyODRiMDNlM2ZmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Alien: Resurrection",
      Year: "1997",
      imdbID: "tt0118583",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDljNGZkNmItNDlmMi00YzJhLWJiYWUtNGY4OGEwNmY0ODg4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Alien vs. Predator",
      Year: "2004",
      imdbID: "tt0370263",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU4MjIwMTcyMl5BMl5BanBnXkFtZTYwMTYwNDA3._V1_SX300.jpg",
    },
    {
      Title: "Resident Alien",
      Year: "2021–",
      imdbID: "tt8690918",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQzODE1MzYtMTM5Mi00YWM1LTgwZTctNTEzMWI2ZGQ3NWM1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "My Stepmother Is an Alien",
      Year: "1988",
      imdbID: "tt0095687",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzhiMjRlMDEtYzYwNi00MzY5LTlmZDgtOTM2ZDBjN2Y2N2FlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
    },
    {
      Title: "Alien Nation",
      Year: "1988",
      imdbID: "tt0094631",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODkwNmNlY2YtY2ZiMS00YjRjLWE5YWEtNjhjMjI1YTY1ZGQxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "Ben 10: Alien Force",
      Year: "2008–2010",
      imdbID: "tt1192169",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmQwYTc1ZDEtMzU3My00OTIzLWE1YmEtYmUyMmMzZTI2ZWNlXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
    },
    {
      Title: "Ben 10: Ultimate Alien",
      Year: "2010–2012",
      imdbID: "tt1622696",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzgxYjcwNDUtZTcxZS00NmIyLWI3OTAtNTQ3NzZjM2RkMTFkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    },
  ]);

  return (
    <main className="">
      <div className="flex sm:flex-row flex-col justify-center p-2  text-black bg-gray-500 rounded-md flex-wrap ">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="text-xl text-center px-2 justify-center flex-wrap hover:text-white hover:bg-gray-800 p-2 m-2 bg-slate-600 rounded-md"
          >
            <label className="font-bold">Title : {movie.Title}</label>
            <p>Year:{movie.Year}</p>
            <p>Type:{movie.Type}</p>
            <div className="display-block ">
              <img className="rounded-md mt-1 " src={movie.Poster} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
