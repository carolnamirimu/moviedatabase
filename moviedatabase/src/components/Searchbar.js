import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
  return (
    <div className="max-w-xl px-5 py-3 flex justify-start content-center p-5  text-gray-400">
      <FaSearch className=" text-2xl m-2" role="button" />
      <input
        className="h-10 w-full min-w-0 rounded pl-7 outline-solid  pr-2"
        placeholder="Search movie...."
      />
    </div>
  );
};

export default Searchbar;
