import React from "react";

const Footer = ({ length }) => {
  return (
    <footer className="flex space-x-6 border-b mb-6 px-5 h-14 items-center text-gray-400 ">
      <p className="sticky -bottom-0 bg-white">
        {" "}
        {length} {length === 1 ? "movie" : "movies"}
      </p>
    </footer>
  );
};

export default Footer;
