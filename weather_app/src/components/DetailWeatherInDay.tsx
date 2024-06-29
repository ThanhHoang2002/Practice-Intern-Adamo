import React, { useContext } from 'react'
import LineChart from "./LineChart";
import { WeatherContext } from '../stores/WeatherContext';
import { getMaxTemperatureInDay } from '../utils/calculations';
import { DeatilWeatherInDayPageLable } from '../utils/constants';

const DetailWeatherInDay = () => {
    const {selectedDay} = useContext(WeatherContext);
    const lable = DeatilWeatherInDayPageLable;
  return (
    <div>
        <div>
        <div className="laptop:flex laptop:justify-between laptop:px-20 mt-4">
          <div className="flex justify-center">
            <img className="h-12" src={selectedDay?.weather?.image} alt="weather" />
            <p className="text-3xl font-bold ml-3">{getMaxTemperatureInDay(selectedDay.temperatureInDay)}</p>
            <p className="mr-5">°C</p>
            <div className="text-slate-500">
              <p>
                {lable.cloudiness}: <span>{selectedDay?.cloudiness}</span>
              </p>
              <p>
                {lable.humidity}: <span>{selectedDay?.humidity}%</span>
              </p>
              <p>
                {lable.wind}: <span>{selectedDay.wind} m/s</span>
              </p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-center font-bold text-xl">{lable.weather}</p>
            <p className="text-center text-slate-500">{selectedDay?.weather?.state}</p>
          </div>
        </div>
      </div>
      <div className="h-[100px] w-full mt-10">
        <p className="laptop:px-20 font-semibold">{lable.temperature}: </p>
        <LineChart temperatureInDay={selectedDay.temperatureInDay} />
      </div>
    </div>
  )
}

export default DetailWeatherInDay