import React from "react";
import sun from "./assets/images/sun.jpg";
import LineChart from "./components/LineChart";
function App() {
  return (
    <div className="min-h-screen App p-5 pt-1 bg-white">
      <h1 className="mt-3 text-center text-xl ">Weather Application</h1>
      <div className="py-2 border-b-2 mt-4">
        <p>
          Result for:{" "}
          <span>
            <b> Thanh Xuân, Hà Nội</b>
          </span>
        </p>
        <input
          type="text"
          className="border border-gray-300 p-1 w-full mt-2 rounded-[4px]"
          placeholder="Tìm kiếm cho địa chỉ khác"
        />
      </div>
      <div>
        <div className="laptop:flex laptop:justify-between laptop:px-20 mt-4">
          <div className="flex justify-center">
            <img className="h-12" src={sun} alt="weather" />
            <p className="text-3xl font-bold ml-3">212</p>
            <p className="mr-5">°F</p>
            <div className="text-slate-500">
              <p>
                Cloudiness: <span>100%</span>
              </p>
              <p>
                Humidity: <span>60%</span>
              </p>
              <p>
                Wind: <span>5.1 m/s</span>
              </p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-center font-bold text-xl">Weather</p>
            <p className="text-center text-slate-500">Clouds</p>
          </div>
        </div>
      </div>
      <div className="h-[100px] w-full mt-10">
        <p className="laptop:px-20 font-semibold">Temperature: </p>
        <LineChart />
      </div>
      <div className="mt-20 grid grid-cols-3 gap-3 laptop:grid-cols-5">
        <div className="cursor-pointer">
          <p className="text-center font-semibold text-lg">Date 27-06</p>
          <div className="flex justify-center items-center">
            <img className="w-[60%]" src={sun} alt="" />
          </div>
          <div className="flex justify-center">
            <p className="mr-2 font-semibold">30°</p>
            <p className="font-semibold text-gray-500">27°</p>
          </div>
        </div>
        <div className="bg-black">hello</div>
        <div className="bg-black">hello</div>
        <div className="cursor-pointer">
          <p className="text-center font-semibold text-lg">Date 27-06</p>
          <div className="flex justify-center items-center">
            <img className="w-[60%]" src={sun} alt="" />
          </div>
          <div className="flex justify-center">
            <p className="mr-2 font-semibold">30°</p>
            <p className="font-semibold text-gray-500">27°</p>
          </div>
        </div>
        <div className="bg-black">hello</div>
      </div>
    </div>
  );
}

export default App;
