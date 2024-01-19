import MoviesList from "./MoviesList";

const Main = ({ movies, setMovies }) => {
  return (
    <main className="">
      <MoviesList
        movies={movies}
        setMovies={setMovies} />
    </main>
  );
};

export default Main;
