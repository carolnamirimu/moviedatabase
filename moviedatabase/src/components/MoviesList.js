import Movie from "./Movie";

const MoviesList = ({ movies, setMovies }) => {
  return (
    <div className="flex sm:flex-row flex-col justify-center p-2  text-black bg-gray-500 rounded-md flex-wrap ">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
