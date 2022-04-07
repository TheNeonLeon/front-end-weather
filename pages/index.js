import { getWeatherData } from "./api/WeatherAPI"
import useSWR from 'swr';
import { useEffect, useState } from "react";
import { authorizationHeaderInfo } from "./api/helper";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const [error, weather] = await getWeatherData();
      setData(weather)
      console.log("fetch function:" + weather)
    }

    fetchWeather();

  }, [])

  return <div>
    <ul>
      {data.map()}
    </ul>
    <button onClick={getWeatherData}></button>
  </div>
}

export default HomePage