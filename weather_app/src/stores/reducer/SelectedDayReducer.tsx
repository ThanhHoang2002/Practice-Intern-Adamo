import { Day } from "../../types/types";

export enum ESelectedDayAction {
    SELECT_DAY = 'SELECT_DAY'
}
export interface ISelectedDayAction {
    type: ESelectedDayAction;
    payload: Day;
}
export const SelectedDayReducer = (state:Day, action:ISelectedDayAction) => {
    switch (action.type) {
        case ESelectedDayAction.SELECT_DAY:
            return action.payload;
        default:
            return state;
    }
}