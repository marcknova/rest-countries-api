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
      <div className="w-full h-auto dark:bg-dark2">
        <div>
          <div>
            <Link to="/">
              <button className="sn:text-base text-xs shadow-lg mt-12 md:ml-16 ml-8 sn:w-32 sn:h-12 w-24 h-10 rounded-md dark:text-white dark:bg-dark1">
                <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
              </button>
            </Link>
          </div>
          <div className="flex lf:flex-nowrap lf:justify-start justify-center flex-wrap mt-18 mb-auto sm:mx-16 mx-5 p-2 dark:text-white">
            <div className="lf:w-[60%] w-full h-full">
              <img
                className="w-full h-full shadow"
                src={location.state.flag}
                alt=""
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lf:w-[80%] w-full md:h-[320px] pb-2 h-full dark:bg-dark2">
              <div className="w-full h-full my-auto dark:bg-dark2">
                <div className="xl:mx-20 sm:mx-12 mx-auto sn:text-base text-xs">
                  <h1 className="font-bold xl:text-2xl lg:text-xl sm:text-2xl text-lg my-5">
                    {location.state.name}
                  </h1>
                  <h3 className="font-semibold mb-2">
                    Native Name:{" "}
                    <span className="font-normal">
                      {location.state.nativeName}
                    </span>
                  </h3>
                  <h3 className="font-semibold mb-2">
                    Population:{" "}
                    <span className="font-normal">{populations}</span>
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
                    <span className="font-normal">
                      {location.state.capital}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="w-full h-full my-auto dark:bg-dark2">
                <div className="xl:mx-14 sm:mx-10 md:my-18 my-7 mx-auto sn:text-base text-xs">
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
              <div className="w-full h-full md:col-span-2 dark:bg-dark2">
                <div className="xl:ml-20 smmx-10 mx-auto">
                  <div className="flex lf:justify-start so:justify-center so:flex-nowrap flex-wrap">
                    <div>
                      <span className="mr-2 sn:text-base text-sm">
                        Border Countries:{" "}
                      </span>
                    </div>
                    <div>
                      {location.state.borders !== undefined ? (
                        location.state.borders.map((data) => (
                          <button
                            key={data}
                            value={data}
                            className="sn:text-base text-sm font-normal w-20 dark:bg-dark1 ml-1 sn:mr-2 mr-auto mt-1 mb-1 shadow rounded-sm"
                            onClick={bordersData}
                          >
                            {" "}
                            {data}
                          </button>
                        ))
                      ) : (
                        <h1 className="ml-2"> Don't have borders Countries</h1>
                      )}
                    </div>
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
