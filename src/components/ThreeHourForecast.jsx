import React from "react";
import { celcTemp } from "../utils/getWeatherData";

export const ThreeHourForecast = ({ threeHoursData }) => {
  return (
    <div className="th-container">
      {threeHoursData?.list?.map((el, index) => {
        if (index < 8) {
          const [date, time] = el.dt_txt.split(" ");
          return (
            <div key={el.dt} className="th-single">
              <p>
                {time.split(":")[0] <= 12
                  ? `${time.split(":")[0]} AM`
                  : `${Number(time.split(":")[0]) - 12} PM`}
              </p>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt=""
              />
              <div className="th-min_max">
                <p>{celcTemp(el?.main?.temp_max).toFixed(0)} &deg;</p>
                <p>{celcTemp(el?.main?.temp_min).toFixed(0)} &deg;</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
