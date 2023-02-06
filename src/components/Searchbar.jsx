import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  getCurrentWeatherByCity,
  getCurrentWeatherByZIP,
  getThreeHourForecastByCity,
  getThreeHourForecastByZip,
} from "../utils/getWeatherData";
import { CurrentWeather } from "./CurrentWeather";
import { ThreeHourForecast } from "./ThreeHourForecast";
export const Searchbar = () => {
  const [data, setData] = useState(null);
  const [threeHoursData, setThreeHoursData] = useState(null);
  const cityRef = useRef("");
  const zipCodeRef = useRef("");
  const countryCodeRef = useRef("");
  const searchHandler = (e) => {
    const city = cityRef.current.value;
    const zipCode = zipCodeRef.current.value;
    const countryCode = countryCodeRef.current.value;
    if (e.keyCode === 13) {
      if (city) {
        getCurrentWeatherByCity(city)
          .then((res) => {
            setData(res);
          })
          .catch((err) => {
            console.log(err);
          });

        getThreeHourForecastByCity("chennai").then((res) => {
          setThreeHoursData(res);
        });
      } else {
        if (zipCode && !countryCode) {
          countryCodeRef.current.focus();
        }
        if (zipCode && countryCode) {
          getCurrentWeatherByZIP({ zipCode, countryCode })
            .then((res) => {
              setData(res);
            })
            .catch((err) => {});

          getThreeHourForecastByZip({ zipCode, countryCode })
            .then((res) => {
              setThreeHoursData(res);
            })
            .catch((err) => {});
        }
      }
    }
  };
  useEffect(() => {
    getCurrentWeatherByCity("chennai")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setData(null);
      });

    getThreeHourForecastByCity("chennai").then((res) => {
      setThreeHoursData(res);
    });
  }, []);

  return (
    <>
      {/* Searchbar by city name  */}
      <div className="s-container">
        <div className="s-icon">
          <BsSearch />
        </div>
        <div className="s-input">
          <input
            onKeyUp={searchHandler}
            ref={cityRef}
            type="text"
            placeholder="City Name"
          />
        </div>
      </div>
      <p className="s-lineBraker">OR</p>
      {/* Searchbar by ZIP CODE */}
      <div className="s-zip-container">
        <div>
          <div className="s-icon">
            <BsSearch />
          </div>
          <div className="s-input">
            <input
              onKeyUp={searchHandler}
              ref={zipCodeRef}
              type="text"
              placeholder="ZIP Code"
            />
          </div>
        </div>
        <div>
          <div className="s-icon">
            <BsSearch />
          </div>
          <div className="s-input">
            <input
              onKeyUp={searchHandler}
              ref={countryCodeRef}
              type="text"
              placeholder="Country Code"
            />
          </div>
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
