import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
const Header = () => {
  return (
    <div className="sticky top-0 bg-white">
      <Navbar />
      <Searchbar />
    </div>
  );
};

export default Header;
