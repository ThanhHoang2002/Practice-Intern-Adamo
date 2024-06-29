import {  Day } from "../../types/types";
export enum EListDayAction {
    SET_LIST_DAY = "SET_LIST_DAY",
}
export interface IListDayAction  {
    type: EListDayAction;
    payload: Day[];
};
export const ListDayReducer = (state:Day[], action: IListDayAction) => {
    switch(action.type){
        case EListDayAction.SET_LIST_DAY:
            return action.payload;
        default:
            return state;
    }
};