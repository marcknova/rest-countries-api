import { Link, useLocation, useNavigate } from "react-router-dom";
const API = `https://restcountries.com/v2/alpha/`;

const Description = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bordersData = (e) => {
    fetch(API + e.target.value)
      .then((res) => res.json())
      .then((data) => {
        const {
          name,
          flag,
          population,
          borders,
          region,
          capital,
          subregion,
          topLevelDomain,
          nativeName,
          currencies,
          languages,
        } = data;
        navigate(`/description/${name}`, {
          state: {
            borders,
            currencies,
            capital,
            flag,
            languages,
            name,
            nativeName,
            population,
            region,
            subregion,
            topLevelDomain,
          },
        });
      })
      .catch((e) => console.log(e));
  };

  const populations = location.state.population.toLocaleString("en-US");

  return (
    <section className="dark:bg-dark2">
      <div className="w-full h-full dark:bg-dark2">
        <div>
          <Link to="/">
            <button className="shadow-lg mt-12 ml-16 w-32 h-12 rounded-md dark:text-white dark:bg-dark1">
              <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
            </button>
          </Link>
        </div>
        <div className="flex mt-18 mx-16 p-1 dark:text-white">
          <div className="w-[60%]">
            <img
              className="w-full h-full shadow"
              src={location.state.flag}
              alt=""
            />
          </div>
          <div className="flex flex-wrap w-[80%] h-[320px] dark:bg-dark2">
            <div className="w-1/2 h-auto dark:bg-dark2">
              <div className="mx-20">
                <h1 className="font-bold text-2xl my-5">
                  {location.state.name}
                </h1>
                <h3 className="font-semibold mb-2">
                  Native Name:{" "}
                  <span className="font-normal">
                    {location.state.nativeName}
                  </span>
                </h3>
                <h3 className="font-semibold mb-2">
                  Population: <span className="font-normal">{populations}</span>
                </h3>
                <h3 className="font-semibold mb-2">
                  Region:{" "}
                  <span className="font-normal">{location.state.region}</span>
                </h3>
                <h3 className="font-semibold mb-2">
                  Sub Region:{" "}
                  <span className="font-normal">
                    {location.state.subregion}
                  </span>
                </h3>
                <h3 className="font-semibold mb-2">
                  Capital:{" "}
                  <span className="font-normal">{location.state.capital}</span>
                </h3>
              </div>
            </div>
            <div className="w-1/2 h-auto dark:bg-dark2">
              <div className="mx-14 mt-18">
                <h2 className="font-semibold mb-2">
                  Top Level Domain:{" "}
                  <span className="font-normal">
                    {location.state.topLevelDomain[0]}
                  </span>
                </h2>
                <h2 className="font-semibold mb-2">
                  Currencies:{" "}
                  <span className="font-normal">
                    {location.state.currencies[0].name}
                  </span>
                </h2>
                <h2 className="font-semibold">
                  Languages:
                  {location.state.languages.map((data) => (
                    <span key={data.iso639_1} className="font-normal">
                      {" "}
                      {data.name}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
            <div className="w-full h-auto dark:bg-dark2">
              <div className="mx-20">
                <div className="flex">
                  <div>
                    <span className="mr-2">Border Countries: </span>
                  </div>
                  <div>
                    {location.state.borders !== undefined ? (
                      location.state.borders.map((data) => (
                        <button
                          key={data}
                          value={data}
                          className="font-normal w-20 dark:bg-dark1 ml-1 mr-2 mt-1 mb-1 shadow rounded-sm"
                          onClick={bordersData}
                        >
                          {" "}
                          {data}
                        </button>
                      ))
                    ) : (
                      <h1 className="ml-2"> No Hay Paises Vecinos</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
