import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { getCurrentWeather } from "../utils/getWeatherData";
import { WeatherDetails } from "./WeatherDeatils";
export const Searchbar = () => {
  const [data, setData] = useState(null);
  const inputRef = useRef("");
  const searchHandler = (e) => {
    const city = inputRef.current.value;
    if (e.keyCode === 13 && city) {
      getCurrentWeather(city)
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    getCurrentWeather("chennai")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setData(null);
      });
  }, []);

  return (
    <>
      <div className="s-container">
        <div className="s-icon">
          <BsSearch />
        </div>
        <div className="s-input">
          <input onKeyUp={searchHandler} ref={inputRef} type="text" />
        </div>
      </div>
      <div>
        <WeatherDetails data={data} />
      </div>
    </>
  );
};
