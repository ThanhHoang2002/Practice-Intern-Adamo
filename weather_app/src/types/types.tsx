export type TemperatureInDay = {
    hour: string;
    temperature: number;
}
export type Day ={
    day : string;
    cloudiness: string;
    humidity: number;
    wind: number;
    weather: Weather;
    temperatureInDay: TemperatureInDay[
    ];
}
export type Address = {
    name: string;
    lat: string;
    lon: string;
}
export type Weather = {
    state: string;
    image: string;
}
export enum EWeather {
    Rain = "Rain",
    Snow = "Snow",
    Clouds = "Clouds",
    Clear = "Clear",
}

