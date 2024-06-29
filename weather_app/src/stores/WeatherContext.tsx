import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Address, Day } from "../types/types";
import { ISelectedAddressAction, SelectedAddressReducer } from "./reducer/SelectedAddressReducer";
import { ISelectedDayAction, SelectedDayReducer } from "./reducer/SelectedDayReducer";
import { initialAddress } from "../utils/constants";
import { IListDayAction, ListDayReducer } from "./reducer/ListDayReducer";

interface WeatherContextType {
    selectedAddress: Address;
    selectAddressDispatch: Dispatch<ISelectedAddressAction>;
    selectedDay: Day;
    selectDayDispatch: Dispatch<ISelectedDayAction>;
    listDay: Day[];
    setListDay: Dispatch<IListDayAction>;
}
interface WeatherProviderProps {
    children: ReactNode;
}
const initalState: WeatherContextType = {
    selectedAddress: {} as Address,
    selectAddressDispatch: () => {},
    selectedDay: {} as Day,
    selectDayDispatch: () => {},
    listDay: [],
    setListDay: () => {},
};
export const WeatherContext = createContext<WeatherContextType>(initalState);

export const WeatherProvider = ({children}: WeatherProviderProps) =>{
    const [selectedAddress, selectAddressDispatch] = useReducer(SelectedAddressReducer, initialAddress);
    const [selectedDay, selectDayDispatch] = useReducer(SelectedDayReducer, {} as Day);
    const [listDay, setListDay] = useReducer(ListDayReducer, [] as Day[]);
    return <WeatherContext.Provider value={{selectedAddress,selectAddressDispatch,selectedDay,selectDayDispatch,listDay, setListDay}}>
        {children}
    </WeatherContext.Provider> 
}