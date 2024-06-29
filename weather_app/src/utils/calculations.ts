import { EWeather, TemperatureInDay } from "../types/types";
import { formatTemperature } from "./format";
import Sun from '../assets/images/sun.jpg';
import Rain from '../assets/images/Rain.png';
import Cloud from '../assets/images/Clouds.jpg';
export const averageTemperature = (temperatureInDay: TemperatureInDay[]) => {
    const total = temperatureInDay.reduce((acc, cur) => acc + cur.temperature, 0);
    return Math.round(total / temperatureInDay.length);
}
export const getMinTemperatureInDay = (temperatureInDay: TemperatureInDay[]) => {
    if (!temperatureInDay ) {
        return ;
    }
    return formatTemperature(Math.min(...temperatureInDay.map((item) => item.temperature)));
}
export const getMaxTemperatureInDay = (temperatureInDay: TemperatureInDay[]) => {
    if (!temperatureInDay ) {
        return ;
    }
    return formatTemperature(Math.max(...temperatureInDay.map((item) => item.temperature)));
}
export const getWeatherImage = (weather: string) => {
    switch (weather) {
        case EWeather.Rain:
            return Rain;
        case EWeather.Snow:
            return Sun;
        case EWeather.Clouds:
            return Cloud;
        case EWeather.Clear:
            return Sun;
        default:
            return "";
    }
};