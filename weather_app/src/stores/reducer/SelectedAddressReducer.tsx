import { Address } from "../../types/types";
export enum ESelectedAddressAction {
    SELECT_ADDRESS = "SELECT_ADDRESS",
}
export interface ISelectedAddressAction  {
    type: ESelectedAddressAction;
    payload: Address;
};
export const SelectedAddressReducer = (state:Address, action: ISelectedAddressAction) => {
    switch(action.type){
        case ESelectedAddressAction.SELECT_ADDRESS:
            return action.payload;
        default:
            return state;
    }
};