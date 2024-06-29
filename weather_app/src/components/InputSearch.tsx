import React, { useContext, useRef, useState } from "react";
import { WeatherContext } from "../stores/WeatherContext";
import { fetchAddressAPI, fetchGetPlaceDetalAPI } from "../apis";
import { ESelectedAddressAction, ISelectedAddressAction } from "../stores/reducer/SelectedAddressReducer";

const InputSearch = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const typingTimeoutRef = useRef<NodeJS.Timeout>();
  const { selectedAddress, selectAddressDispatch } = useContext(WeatherContext);
  const [listAddress, setListAddress] = useState<any>([]);
  const handleChangeSearchInput = (value: string) => {
    setInputSearch(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(async () => {
      setListAddress(await fetchAddressAPI(value));
    }, 500);
  };
  const handleSelectAddress = async (address: any) => {
    const payload = await fetchGetPlaceDetalAPI(address.place_id);
    const action: ISelectedAddressAction = {
      type: ESelectedAddressAction.SELECT_ADDRESS,
      payload: {
        name: address.description,
        lat: payload.geometry.location.lat,
        lon: payload.geometry.location.lng,
      },
    };
    selectAddressDispatch(action);
    setInputSearch("");
    setListAddress([]);
  };
  return (
    <div className="relative py-2 border-b-2 mt-4">
      <p>
        Result for:{" "}
        <span>
          <b> {selectedAddress.name}</b>
        </span>
      </p>
      <input
        type="text"
        className="border border-gray-300 p-1 w-full mt-2 rounded-[4px]"
        placeholder="Tìm kiếm cho địa chỉ khác"
        value={inputSearch}
        onChange={(e) => handleChangeSearchInput(e.target.value)}
      />
      <div className="absolute w-full">
        {listAddress !== null && listAddress.length !== 0 && (
          <div className="bg-white border border-gray-300 w-full mt-1 rounded-[4px]">
            {listAddress.map((address: any, index: number) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectAddress(address)}
              >
                <p>{address.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSearch;
