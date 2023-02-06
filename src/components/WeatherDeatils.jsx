import { TbTemperatureCelsius } from "react-icons/tb";
export const WeatherDetails = ({ data }) => {
  const date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const celcTemp = (temp) => {
    return temp - 273.15;
  };
  return (
    <div className="w-container">
      {data?.message !== "city not found" ? (
        <>
          {" "}
          <div className="w-cityDetails">
            <h3>{data?.name}</h3>
            <p>{`${date.getDate()} ${month[date.getMonth()]},${
              weekday[date.getDay()]
            }`}</p>
          </div>
          <div className="w-temp">
            <div>
              <h1 className="w-tempreture">
                {celcTemp(data?.main?.temp).toFixed(2)} <TbTemperatureCelsius />
              </h1>
              <p>Feels Like {celcTemp(data?.main?.feels_like).toFixed(2)}</p>
            </div>
            <div className="w-image">
              {data?.weather[0]?.main === "clear" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6581/6581533.png"
                  alt=""
                />
              ) : data?.weather[0]?.main === "Clouds" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4724/4724094.png"
                  alt=""
                />
              ) : data?.weather[0]?.main === "haze" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1779/1779807.png"
                  alt=""
                />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4064/4064276.png"
                  alt=""
                />
              )}
              <p>{data?.weather[0]?.description}</p>
            </div>
          </div>
          <div className="w-weather">
            <div className="w-wind">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2045/2045829.png"
                alt="wind"
              />
              <p>{data?.wind?.speed} m/s</p>
              <p>Wind</p>
            </div>
            <div className="w-humidity">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9047/9047058.png"
                alt="humiduty"
              />
              <p>{data?.main?.humidity} %</p>
              <p>Humidity</p>
            </div>
            <div className="w-rain">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2112/2112368.png"
                alt="rain"
              />
              <p>{data?.clouds?.all} %</p>
              <p>Rain</p>
            </div>
          </div>
        </>
      ) : (
        <h1 className="w-notFound">OOPS! NOT FOUND</h1>
      )}
    </div>
  );
};
