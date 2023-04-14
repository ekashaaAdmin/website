import { create } from "zustand";

interface FilterParams {
    location: string;
    setLocation: ( newLocation: string ) => void;
    configuration: number;
    setConfiguration: ( newConfig: number ) => void;
    minPrice: number;
    setMinPrice: ( newMinPrice: number ) => void;
    maxPrice: number;
    setMaxPrice: ( newManPrice: number ) => void;
}

export const useFilterStore = create<FilterParams>( ( set ) => ( {
    location: "",
    setLocation: ( location ) => set( ( state ) => ( { ...state, location } ) ),
    configuration: 2,
    setConfiguration: ( configuration ) =>
        set( ( state ) => ( { ...state, configuration } ) ),
    minPrice: 2,
    setMinPrice: ( minPrice ) => set( ( state ) => ( { ...state, minPrice } ) ),
    maxPrice: 50,
    setMaxPrice: ( maxPrice ) => set( ( state ) => ( { ...state, maxPrice } ) )
} ) );
