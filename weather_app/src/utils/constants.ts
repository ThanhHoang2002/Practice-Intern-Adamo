export const GOONG_API_KEY = "TPtlQJJsrOvbIegiMhkf9ChSvNUXpQFjPWbE3BZM";

export const WEATHER_API_KEY = "64a6c10de01e2b6badb8b5ad72fc5fa7";

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
