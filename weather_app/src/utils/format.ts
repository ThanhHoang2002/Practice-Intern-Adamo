import { Day, TemperatureInDay, Weather } from "../types/types";
import { getWeatherImage } from "./calculations";

export const formatListDay = (listday: any[]): Day[] => {
    // Tạo một đối tượng Map để tổng hợp dữ liệu cho mỗi ngày
    const dailyDataMap = new Map<string, {
        cloudinessTotal: number;
        humidityTotal: number;
        wind: number;
        temperatureInDay: TemperatureInDay[];
        weather: Weather;
        count: number;
    }>();

    listday.forEach((item) => {
        const dt_txt = item.dt_txt.split(' ')[0]; 
        if (!dailyDataMap.has(dt_txt)) {
            dailyDataMap.set(dt_txt, {
                cloudinessTotal: 0,
                humidityTotal: 0,
                wind: 0,
                temperatureInDay: [],
                weather: {
                    state: item.weather[0].main,
                    image: getWeatherImage(item.weather[0].main)
                },
                count: 0,
            });
        }

        const dailyData = dailyDataMap.get(dt_txt)!;
        dailyData.cloudinessTotal += item.clouds.all;
        dailyData.humidityTotal += item.main.humidity;
        dailyData.wind += item.wind.speed;
        dailyData.temperatureInDay.push({
            hour: item.dt_txt.split(' ')[1], 
            temperature: item.main.temp,
        });

        dailyData.count++;
    });

    const formattedListDay: Day[] = [];
    dailyDataMap.forEach((value, key) => {
        const averageCloudiness = Math.round(value.cloudinessTotal / value.count);
        const averageHumidity = Math.round(value.humidityTotal / value.count);
        const averageWindSpeed = Math.round((value.wind / value.count)*10)/10;
        formattedListDay.push({
            day: key,
            cloudiness: `${averageCloudiness}%`, 
            humidity: averageHumidity,
            wind: averageWindSpeed , 
            weather: value.weather,
            temperatureInDay: value.temperatureInDay,
        });
    });

    return formattedListDay;
};
export const formatDay =(day : string)=>{
    const daySplit = day.split("-");
    return daySplit[2] + "-" + daySplit[1];
}
export const formatHour =(hour : string)=>{
    const hourSplit = hour.split(":");
    return hourSplit[0] + ":" + hourSplit[1];
}
export const formatTemperature = (temperature: number) => {
    return Math.round(temperature - 273.15);
}
