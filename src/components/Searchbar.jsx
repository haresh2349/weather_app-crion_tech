import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  getCurrentWeather,
  getThreeHourForecast,
} from "../utils/getWeatherData";
import { CurrentWeather } from "./CurrentWeather";
import { ThreeHourForecast } from "./ThreeHourForecast";
export const Searchbar = () => {
  const [data, setData] = useState(null);
  const [threeHoursData, setThreeHoursData] = useState(null);
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

      getThreeHourForecast("palanpur").then((res) => {
        setThreeHoursData(res);
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

    getThreeHourForecast("palanpur").then((res) => {
      setThreeHoursData(res);
    });
  }, []);

  return (
    <>
      {/* Searchbar  */}
      <div className="s-container">
        <div className="s-icon">
          <BsSearch />
        </div>
        <div className="s-input">
          <input onKeyUp={searchHandler} ref={inputRef} type="text" />
        </div>
      </div>
      {/*Weather Details */}
      <div>
        <CurrentWeather data={data} />
      </div>
      {/* Three Hour Forecast */}
      <ThreeHourForecast threeHoursData={threeHoursData} />
    </>
  );
};
