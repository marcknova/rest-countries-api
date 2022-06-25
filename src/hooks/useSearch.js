export const filtrarDatos = () => {
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
  resultadoBusqueda;
};
