import React, { useState,useEffect } from "react";
import Card from "./Card";
import Dropdown from 'react-dropdown';
import Spinner from "./Spinner";

const Main = () => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [tablaBandera, setTablaBandera]= useState([]);
    const [busqueda, setBusqueda]= useState("");
    const [filtro, setFiltro]= useState("");

    const fetchCountry = async () => {
      fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then((data) => {
          setIsLoaded(true);
          setItems(data);
          setTablaBandera(data);
      },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
    }

    const options = [
      'Africa', 'Americas', 'Asia', 'Europa', 'Oceania'
     ];

     const onDropdownChange = (e) => {
       setFiltro(e.value);
       seleccionar(e.value);
     }

    const handleChange = (e) => {
      setBusqueda(e.target.value);
      filtrar(e.target.value);
    }

    const seleccionar = (terminoBusqueda) => {
      var resultadoBusqueda = tablaBandera.filter((elemento) => {
        if((elemento.region.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))) {
          return elemento;
        }
      });
      setItems(resultadoBusqueda);
    }

    const filtrar = (terminoBusqueda) => {
      var resultadoBusqueda = tablaBandera.filter((elemento) => {
        if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
          return elemento;
        }
      });
      setItems(resultadoBusqueda);
    }

    useEffect(() => {
        fetchCountry();
      }, []);
      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <Spinner />
      } else {
        return (
          <main>
          <section>
              <div className="w-full h-36 flex dark:bg-dark2">
                  <div className="my-10 ml-11 w-1/2">
                      <div className="shadow-md w-[75%] dark:bg-dark1">
                        <span className="p-[1.10rem] dark:bg-dark1"><i className="fas fa-search text-xl dark:text-white"></i></span>
                        <input type="search" className="w-auto h-14 outline-none dark:bg-dark1 dark:text-white" value={busqueda} placeholder="Search for a country..." onChange={handleChange} />
                      </div>
                  </div>
                  <div className="w-1/2 my-10">
                    <div className="w-full flex justify-end">
                    <Dropdown className="p-1 mr-[5rem] mt-1 dark:bg-dark1 shadow-md rounded-lg" options={options}  placeholder="Filter By Region" onChange={onDropdownChange} />
                </div>
            </div>
              </div>
              <div className="flex flex-wrap p-1 justify-center dark:bg-dark2">
              { 
                items.map((item) => (
                  <div className="mr-8 mb-10 dark:bg-dark1 dark:text-white">
                  <Card key={item.alphaCode} {...item}/>
                  </div>
                ))
              }
              </div>
          </section>
          </main>
    )
  }
}

//https://restcountries.com/v3.1/all
//https://restcountries.com/v2/name/peru

export default Main
