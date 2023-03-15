const API_KEY = '3c8156ef885aebd3cfae780f4bf9283b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};
