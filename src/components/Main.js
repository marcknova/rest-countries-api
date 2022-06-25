import Card from "./Card";
import "./Main.css";
import { Busqueda } from "../utils/Busqueda.js";
import Dropdown from "react-dropdown";
import Spinner from "./Spinner";
import React from "react";

const Main = () => {
  const {
    items,
    isLoaded,
    error,
    busqueda,
    filtro,
    handleChange,
    onDropdownChange,
  } = Busqueda();

  // console.log(items);

  const options = ["Africa", "Americas", "Asia", "Europa", "Oceania"];

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Spinner />;
  } else {
    return (
      <main>
        <section>
          <div className="w-full h-36 flex dark:bg-dark2">
            <div className="my-10 ml-11 w-1/2">
              <div className="shadow-md w-[75%] dark:bg-dark1">
                <span className="p-[1.10rem] dark:bg-dark1">
                  <i className="fas fa-search text-xl dark:text-white"></i>
                </span>
                <input
                  type="search"
                  className="w-auto h-14 outline-none dark:bg-dark1 dark:text-white"
                  value={busqueda}
                  placeholder="Search for a country..."
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-1/2 my-10">
              <div className="w-full flex justify-end">
                <Dropdown
                  className="p-1 mr-[5rem] mt-1 dark:bg-dark1 shadow-md rounded-lg"
                  value={filtro}
                  options={options}
                  placeholder="Filter By Region"
                  onChange={onDropdownChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap p-1 justify-center dark:bg-dark2">
            {items.map((item) => (
              <div
                key={item.alpha2Code}
                className="mr-8 mb-10 dark:bg-dark1 dark:text-white"
              >
                <Card {...item} />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
};

//https://restcountries.com/v3.1/all
//https://restcountries.com/v2/name/peru

export default Main;
