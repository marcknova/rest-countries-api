import { Link, useLocation } from "react-router-dom"; 

const Description = () => {

  const location = useLocation();

  const population = location.state.population.toLocaleString('en-US')

  return (
  <section>
    <div className="w-full h-full">
      <div>
        <Link to="/">
            <button className="shadow-lg mt-12 ml-16 w-32 h-12 rounded-md dark:text-white dark:bg-dark1"><i className="fas fa-long-arrow-alt-left mr-2"></i>Back</button>
        </Link>
      </div>
          <div className="flex mt-18 mx-16 h-98 p-1 dark:text-white">
            <div className="w-2/5">
              <img className="w-full h-full shadow" src={location.state.flag} alt=""/>
            </div>
            {/* <div className="flex flex-wrap"> */}
              <div className="w-1/3">
                <div className="mx-20">
                  <h1 className="font-bold text-2xl my-5">{location.state.name}</h1>
                  <h3 className="font-semibold mb-2">Native Name: <span className="font-normal">{location.state.nativeName}</span></h3>
                  <h3 className="font-semibold mb-2">Population: <span className="font-normal">{ population }</span></h3>
                  <h3 className="font-semibold mb-2">Region: <span className="font-normal">{location.state.region}</span></h3>
                  <h3 className="font-semibold mb-2">Sub Region: <span className="font-normal">{location.state.subregion}</span></h3>
                  <h3 className="font-semibold mb-2">Capital: <span className="font-normal">{location.state.capital}</span></h3>
                </div>
              </div>
              <div className="w-1/3">
                <div className="mx-14 mt-18">
                  <h2 className="font-semibold mb-2">Top Level Domain: <span className="font-normal">{location.state.topLevelDomain[0]}</span></h2>
                  <h2 className="font-semibold mb-2">Currencies: <span className="font-normal">{location.state.currencies[0].name}</span></h2>
                  <h2 className="font-semibold">Languages:
                    {
                      location.state.languages.map(data => 
                      <span key={data.iso639_1} className="font-normal"> { data.name }</span>
                    )
                    }
                    </h2>
                </div>
              </div>
              {/* <div className="w-auto">
                <div>
                  <div>
                  <h1>Border Countries:</h1>
                  <button>France</button>
                  <button>Germany</button>
                  <button>Netherlands</button>
                  </div>
                </div>
              </div> */}
            </div>
          {/* </div> */}
    </div>
  </section>
  );
};



export default Description;
