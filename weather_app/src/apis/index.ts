import axios from "axios"
import { GetPlaceUrl, GoongApiUrl, WeatherUrl } from "../utils/constants";

export const fetchAddressAPI = async (input: string) =>{
    const response = await axios.get(GoongApiUrl(input));    
    return response.data.predictions;
}

export const fetchGetPlaceDetalAPI = async (place_id: string,) =>{
    const response = await axios.get(GetPlaceUrl(place_id));
    return response.data.result;
}

export const fetchWeatherAPI = async (lat: string, lon: string) =>{
        const response = await axios.get(WeatherUrl(lat, lon));    
        return response.data.list;

}
