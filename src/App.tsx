import { useEffect, useState } from "react";
import Header from "./components/HeaderComponents/Header";
import Main from "./components/MainComponents/Main";
import { IAppState, INetwork, IStation } from "./interfaces";
import { HandleObjectClickContext } from "./context";

function App() {
  const baseUrl = "https://api.citybik.es"

  const [state, setState] = useState<IAppState>({
    networks: [],
    stations : [],
  });

  const [currentStation, setCurrentStation] = useState<IStation | undefined>(undefined);
  const [currentNetwork, setCurrentNetwork] = useState<INetwork | undefined>(undefined);
  
  async function getNetworks(){
    const response = await fetch(`${baseUrl}/v2/networks`);
    const data = await response.json();
    //console.log(data["networks"]);
    setState((prevState) => ({...prevState, networks: data["networks"]}));
  }

  async function getStations(url : string){
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();
    //console.log(data["networks"]["stations"]);
    setState((prevState) => ({...prevState, stations: data["network"]["stations"]}));
  }

  function handleNetworkClick(networkID : string) : void{
    const selectedNetwork : INetwork | undefined = state.networks.find((network : INetwork) => {
      return network.id === networkID;
    });
    if(!selectedNetwork){
      console.log("Something went wrong...(handleNetworkClick)");
      return;
    }
    if(selectedNetwork.id !== currentNetwork?.id){
      setCurrentStation(undefined);
    }
    setCurrentNetwork(selectedNetwork);
    getStations(selectedNetwork.href);
  }

  function handleStationClick(stationID : string): void{
    const selectedStation : IStation | undefined = state.stations.find((station : IStation) => {
      return station.id === stationID;
    });
    if(!selectedStation){
      console.log("Something went wrong...(handleStationClick)");
      return;
    }
    setCurrentStation(selectedStation);
  }


  useEffect(() => {
    getNetworks();
  }, [])

  return (
    <HandleObjectClickContext.Provider value={{ networkClick : handleNetworkClick, stationClick: handleStationClick }}>
      <Header stationCount={state.stations.length} currentStation={currentStation?.name} />
      <Main networks={state.networks} stations={state.stations} />
    </HandleObjectClickContext.Provider>
  );
}

export default App;
