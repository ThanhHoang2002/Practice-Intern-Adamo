/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { fetchWeatherAPI } from '../apis';
import { WeatherContext } from '../stores/WeatherContext';
import { formatDay, formatListDay } from '../utils/format';
import { getMaxTemperatureInDay, getMinTemperatureInDay } from '../utils/calculations';
import { EListDayAction, IListDayAction } from '../stores/reducer/ListDayReducer';
import { Day } from '../types/types';
import { ESelectedDayAction, ISelectedDayAction } from '../stores/reducer/SelectedDayReducer';
const ListDay = () => {
    const {selectedAddress,listDay, setListDay,selectDayDispatch} = useContext(WeatherContext);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchWeatherAPI(selectedAddress.lat, selectedAddress.lon);  
            const action:IListDayAction = {
                type: EListDayAction.SET_LIST_DAY,
                payload: formatListDay(response),
            }          
            setListDay(action);
            const action1:ISelectedDayAction ={
                type: ESelectedDayAction.SELECT_DAY,
                payload: action.payload[0],
            }
            selectDayDispatch(action1);
        };
        
        fetchData();
    }, [selectedAddress]);
    const handleClickDay = (day: Day) => {
        const action:ISelectedDayAction ={
            type: ESelectedDayAction.SELECT_DAY,
            payload: day,
        }
        selectDayDispatch(action);
    }    
  return (
    <div className="mt-20 grid grid-cols-3 gap-3 laptop:grid-cols-6">
        {
            listDay.map((day: Day, index: number) => (
                <div key={index} className="cursor-pointer hover:border-2 hover:rounded-[4px] hover:border-black"
                onClick={()=>handleClickDay(day)}>
                    <p className="text-center font-semibold text-lg">Date {formatDay(day.day)}</p>
                    <div className="flex justify-center items-center">
                        <div className='w-[60%] aspect-square flex justify-center items-center'>
                            <img src={day.weather.image} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="mr-2 font-semibold">{getMaxTemperatureInDay(day.temperatureInDay)}°</p>
                        <p className="font-semibold text-gray-500">{getMinTemperatureInDay(day.temperatureInDay)}°</p>
                    </div>
                </div>
            ))
        }   
      </div>
  )
}

export default ListDay