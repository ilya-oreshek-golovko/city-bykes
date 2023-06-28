import { useEffect, useState } from "react";
import Header from "./components/HeaderComponents/Header";
import Main from "./components/MainComponents/Main";
import { IAppState } from "./interfaces";

function App() {

  const [state, setState] = useState<IAppState>({
    networks: [],
    stations : [],
  });
  
  async function getNetworks(){
    const response = await fetch("https://api.citybik.es/v2/networks");
    const data = await response.json();
    setState((prevState) => ({...prevState, networks: data["networks"]}));
  }

  async function getStations(){
    const response = await fetch("");
    const data = await response.json();
    setState((prevState) => ({...prevState, stations: data["network"]["stations"]}));
  }

  useEffect(() => {
    getNetworks();
  }, [])

  return (
    <div>
      <Header stationCount={""} currentStation={""} />
      <Main networks={state.networks} stations={state.stations} />
    </div>
  );
}

export default App;
