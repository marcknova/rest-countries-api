import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <header className="shadow-md dark:bg-dark1">
      <nav className="p-5">
        <div className="flex justify-between">
          <div>
            <h1 className="mc:text-2xl mc:mx-10 mc:mt-0 mt-1 text-xl font-bold ml-auto dark:text-white">
              <Link to="/">Where in the world?</Link>
            </h1>
          </div>
          <div>
            <Toggle className="mx-auto" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
