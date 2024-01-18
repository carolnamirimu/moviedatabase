import { IoMdFilm } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <nav className="flex space-x-6 border-b mb-6 px-5 h-14 items-center text-gray-400 ">
        <span>
          <IoMdFilm />
        </span>
        <ul className="flex space-x-6">
          <li>
            <a className="aselected movies" title="Selected Movies" href="#">
              Select Movies
            </a>
          </li>
          <li>
            <a className="favorite movie" title="My favorite Movies" href="#">
              My favorite movie
            </a>
          </li>
          <li>
            <a className="about" title="About project" href="#">
              About project
            </a>
          </li>
        </ul>
      </nav>
      <h2
        id="favoriteMoviesList"
        className="text-white text-2xl  top-40 bg-gray-500 p-5 mt-3 flex justify-center"
      >
        Search and Select favorite movies
      </h2>
    </div>
  );
};

export default Navbar;
