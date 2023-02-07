import { TbTemperatureCelsius } from "react-icons/tb";
import {
  clearWeather,
  cloudyWeather,
  drizzleWeather,
  hazeWeather,
  humidity,
  mistWeather,
  month,
  rain,
  rainyWeather,
  stromyWeather,
  weekday,
  wind,
} from "../assets/data";
import { celcTemp } from "../utils/getWeatherData";
export const CurrentWeather = ({ data }) => {
  const date = new Date();

  return (
    <div className="w-container">
      <div className="w-cityDetails">
        <h3>{data?.name}</h3>
        <p>{`${date.getDate()} ${month[date.getMonth()]},${
          weekday[date.getDay()]
        }`}</p>
      </div>
      <div className="w-temp">
        <div>
          <h1 className="w-tempreture">
            {data.cod === 200 && celcTemp(data?.main?.temp).toFixed(2)}{" "}
            <TbTemperatureCelsius />
          </h1>
          <p>Feels Like {celcTemp(data?.main?.feels_like).toFixed(2)}</p>
        </div>
        <div className="w-image">
          {data?.weather[0]?.description?.includes("clear") ? (
            <img src={clearWeather} alt="" />
          ) : data?.weather[0]?.description?.includes("clouds") ? (
            <img src={cloudyWeather} alt="" />
          ) : data?.weather[0]?.description?.includes("haze") ? (
            <img src={hazeWeather} alt="haze" />
          ) : data?.weather[0]?.description?.includes("mist") ? (
            <img src={mistWeather} alt="mist" />
          ) : data?.weather[0]?.description?.includes("rain") ? (
            <img src={rainyWeather} alt="rainy" />
          ) : data?.weather[0]?.description?.includes("drizzle") ? (
            <img src={drizzleWeather} alt="drizzle" />
          ) : data?.weather[0]?.description?.includes("strom") ? (
            <img src={stromyWeather} alt="stromy" />
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
          <img src={wind} alt="wind" />
          <p>{data?.wind?.speed} m/s</p>
          <p>Wind</p>
        </div>
        <div className="w-humidity">
          <img src={humidity} alt="humiduty" />
          <p>{data?.main?.humidity} %</p>
          <p>Humidity</p>
        </div>
        <div className="w-rain">
          <img src={rain} alt="rain" />
          <p>{data?.clouds?.all} %</p>
          <p>Rain</p>
        </div>
      </div>
    </div>
  );
};
