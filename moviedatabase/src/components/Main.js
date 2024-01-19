const Main = ({ movies, setMovies }) => {
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
