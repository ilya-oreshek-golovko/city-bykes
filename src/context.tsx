import { createContext } from "react";

export type HandleObjectClickType = {
    networkClick: (id : string) => void,
    stationClick: (id : string) => void,
}

const HandleObjectClickContext = createContext<HandleObjectClickType | null>(null);

export {HandleObjectClickContext}