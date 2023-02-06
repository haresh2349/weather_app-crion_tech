export const getCurrentWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16586729b70593baec0bd53f8b6e2596`
  );
  const data = await res.json();
  console.log(data, "data");
  return data;
};
