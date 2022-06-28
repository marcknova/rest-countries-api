import { useNavigate } from "react-router-dom";

const Card = ({ ...props }) => {
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
  } = props;

  const navigate = useNavigate();

  const toDescription = () => {
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
  };

  return (
    <div className="lf:w-280 le:w-[350px] lg:w-[300px] sm:w-[390px] h-full shadow-md rounded-md">
      <div className="rounded-t-md lf:h-180 lg:h-[200px] h-[230px]">
        <img
          className="w-full h-full cursor-pointer"
          onClick={toDescription}
          src={flag}
          alt=""
        />
      </div>
      <div className="p-2 mt-4 mb-10 mx-3">
        <h1 className="font-bold text-xl mb-3">{name}</h1>
        <h2 className="font-bold my-1">
          Population:<span className="font-normal ml-1">{population}</span>
        </h2>
        <h2 className="font-bold my-1">
          Region:<span className="font-normal ml-1">{region}</span>
        </h2>
        <h2 className="font-bold my-1">
          Capital:<span className="font-normal ml-1">{capital}</span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
