// GET CURRENT WEATHER DETAILS BY CITY NAME

export const getCurrentWeatherByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16586729b70593baec0bd53f8b6e2596`
  );
  const data = await res.json();
  return data;
};

// GET THREE HOURS WEATHER DETAILS CITY NAME

export const getThreeHourForecastByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16586729b70593baec0bd53f8b6e2596`
  );
  const data = await res.json();
  return data;
};

export const celcTemp = (temp) => {
  return temp - 273.15;
};

// GET CURRENT WEATHER DETAILS BY ZIP CODE

export const getCurrentWeatherByZIP = async ({ zipCode, countryCode }) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=16586729b70593baec0bd53f8b6e2596`
  );
  const data = await res.json();
  return data;
};

// GET THREE HOURS WEATHER DETAILS CITY NAME

export const getThreeHourForecastByZip = async ({ zipCode, countryCode }) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${countryCode}&appid=16586729b70593baec0bd53f8b6e2596`
  );
  const data = await res.json();
  return data;
};
