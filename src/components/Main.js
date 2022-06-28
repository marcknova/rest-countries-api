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
          <div className="w-full sl:h-36 h-full flex flex-col sl:flex-row dark:bg-dark2">
            <div className="sl:w-1/2 my-10 sl:ml-11 ml-8 w-[90%]">
              <div className="sl:w-[75%] shadow-md w-11/12 dark:bg-dark1">
                <span className="p-[1.10rem] dark:bg-dark1">
                  <i className="fas fa-search text-xl dark:text-white"></i>
                </span>
                <input
                  type="search"
                  className="sl:w-auto h-14 outline-none dark:bg-dark1 dark:text-white"
                  value={busqueda}
                  placeholder="Search for a country..."
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sl:w-1/2 my-10 w-[90%]">
              <div className="w-full flex sl:justify-end justify-start sm:ml-0 ml-8">
                <Dropdown
                  className="p-1 sl:mr-[5rem] sm:w-[full] lg:w-[30%] w-[60%] mt-1 shadow-md rounded-lg"
                  menuClassName="dark:bg-dark1"
                  controlClassName="dark:bg-dark1"
                  placeholderClassName="dark:text-white"
                  arrowClassName="dark:bg-dark1 dark:text-white"
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
                className="xl:mr-5 lf:mr-2 lf:ml-1 sm:w-auto w-[90%] mb-10 mx-auto dark:bg-dark1 dark:text-white"
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
