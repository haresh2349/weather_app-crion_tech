export const getCurrentWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16586729b70593baec0bd53f8b6e2596`
  );
  const data = await res.json();
  console.log(data, "data");
  return data;
};

export const getThreeHourForecast = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16586729b70593baec0bd53f8b6e2596`
  );
  const data = await res.json();
  return data;
};

export const celcTemp = (temp) => {
  return temp - 273.15;
};

export const clearWeather =
  "https://cdn-icons-png.flaticon.com/512/6581/6581533.png";
export const hazeWeather =
  "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
export const mistWeather =
  "https://cdn-icons-png.flaticon.com/512/4005/4005817.png";
export const cloudyWeather =
  "https://cdn-icons-png.flaticon.com/512/1146/1146869.png";
export const drizzleWeather =
  "https://cdn-icons-png.flaticon.com/512/3075/3075858.png";
export const stromyWeather =
  "https://cdn-icons-png.flaticon.com/512/622/622046.png";
export const rainyWeather =
  "https://cdn-icons-png.flaticon.com/512/2337/2337478.png";
