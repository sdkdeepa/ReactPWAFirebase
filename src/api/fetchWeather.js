import axios from 'axios';

const URL = `https://api.openweathermap.org/data/2.5/weather`;

//Please Copy paste the API key from openweathermap.org
const API_KEY = "";

//using axios for GET method

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}