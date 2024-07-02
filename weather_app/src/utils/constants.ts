const GOONG_API_KEY = process.env.REACT_APP_GOONG_API_KEY;

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const initialAddress = {
    name: "Công ty cổ phần LILAMA 10, Phố Tố Hữu, Trung Văn, Nam Từ Liêm, Hà Nội",
    lat: "20.997785",
    lon: "105.7937423"
}
export const initialListDay = [
]
export const DeatilWeatherInDayPageLable= {
    temperature: "Temperature",
    cloudiness: "Cloudiness",
    humidity: "Humidity",
    wind: "Wind",
    weather: "Weather",
}
export const GoongApiUrl = ( input: string)=>{
    return `https://rsapi.goong.io/Place/AutoComplete?api_key=${GOONG_API_KEY}&input=${input}&limit=5`;
}
export const GetPlaceUrl = ( place_id: string)=>{
    return `https://rsapi.goong.io/Place/Detail?place_id=${place_id}&api_key=${GOONG_API_KEY}`
}

export const WeatherUrl = (lat: string, lon: string)=>{
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
}
