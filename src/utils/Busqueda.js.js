import { get } from "../utils/HttpClient";
import { useQuery } from "../hooks/useQuery";
import { useEffect, useState } from "react";

export const Busqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");
  const [items, setItems] = useState([]);
  const [tablaBandera, setTablaBandera] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const query = useQuery();
  const search = query.get("search");

  const API = "https://restcountries.com/v2/all";

  const onDropdownChange = (e) => {
    setFiltro(e.value);
    seleccionar(e.value);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const seleccionar = (terminoBusqueda) => {
    var resultadoBusqueda = tablaBandera.filter((elemento) => {
      if (
        elemento.region
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
      return false;
    });
    setItems(resultadoBusqueda);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = tablaBandera.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
      return false;
    });
    setItems(resultadoBusqueda);
  };

  useEffect(() => {
    get(API)
      .then((res) => {
        setIsLoaded(true);
        setItems(res.data);
        setTablaBandera(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, [search]);

  return {
    items,
    tablaBandera,
    isLoaded,
    error,
    busqueda,
    filtro,
    handleChange,
    onDropdownChange,
  };
};
