import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import {
  getCurrentWeatherByCity,
  getCurrentWeatherByZIP,
  getThreeHourForecastByCity,
  getThreeHourForecastByZip,
} from "../utils/getWeatherData";
import { CurrentWeather } from "./CurrentWeather";
import { ThreeHourForecast } from "./ThreeHourForecast";
import { BallTriangle } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
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
      if (!city && !zipCode && !countryCode) {
        console.log("ksndf");
        toast.error("Please Enter valid details!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (city) {
        getCurrentWeatherByCity(city)
          .then((res) => {
            setData(res);
          })
          .catch((err) => {
            toast.error("Something went wrong!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });

        getThreeHourForecastByCity(city).then((res) => {
          setThreeHoursData(res);
        });
      } else {
        if (zipCode && !countryCode) {
          countryCodeRef.current.focus();
        } else if (!zipCode && countryCode) {
          toast.error("Please Enter ZIP code!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        if (zipCode && countryCode) {
          getCurrentWeatherByZIP({ zipCode, countryCode })
            .then((res) => {
              setData(res);
            })
            .catch((err) => {
              toast.error("Something went wrong!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });

          getThreeHourForecastByZip({ zipCode, countryCode })
            .then((res) => {
              setThreeHoursData(res);
            })
            .catch((err) => {
              toast.error("Something went wrong!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
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
        toast.error("Something went wrong!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
      {data?.message === "city not found" ? (
        <h1 className="notFound">Opps! Not Found</h1>
      ) : data === null ? (
        <div className="loader">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <>
          {/*Weather Details */}
          <CurrentWeather data={data} />

          {/* Three Hour Forecast */}
          <ThreeHourForecast threeHoursData={threeHoursData} />
        </>
      )}
      <ToastContainer />
    </>
  );
};
