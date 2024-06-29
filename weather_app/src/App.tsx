import DetailWeatherInDay from "./components/DetailWeatherInDay";
import InputSearch from "./components/InputSearch";
import ListDay from "./components/ListDay";
const  App=()=> {
  return (
    <div className="min-h-screen App p-5 pt-1 bg-white">
      <h1 className="mt-3 text-center text-xl ">Weather Application</h1> 
      <InputSearch/>   
      <DetailWeatherInDay/>
      <ListDay/>
    </div>
  );
}

export default App;
