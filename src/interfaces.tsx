export interface IAppState{
    networks: Array<INetwork>,
    stations: IStation[],
}
export interface INetwork {
    company: string[]
    href: string
    id: string
    location: ILocation
    name: string
}

export interface ILocation {
    city: string
    country: string
    latitude: number
    longitude: number
}

export interface IStation {
    empty_slots: number
    extra: IExtra
    free_bikes: number
    id: string
    latitude: number
    longitude: number
    name: string
    timestamp: string
}
  
export interface IExtra {
    address: string
    ebikes: number
    electric_free: number
    electric_slots: number
    normal_bikes: number
    normal_free: number
    normal_slots: number
    slots: number
    uid: string
    has_ebikes?: boolean
}
  