import { create } from "zustand";

interface FilterParams {
    location: string[];
    setLocation: ( newLocations: string[] ) => void;
    configuration: number[];
    setConfiguration: ( newConfigs: number[] ) => void;
    developers: string[];
    setDevelopers: ( newConfigs: string[] ) => void;
    minPrice: number;
    setMinPrice: ( newMinPrice: number ) => void;
    maxPrice: number;
    setMaxPrice: ( newManPrice: number ) => void;
}

export const useFilterStore = create<FilterParams>( ( set ) => ( {
    location: [],
    setLocation: ( locations: string[] ) =>
        set( ( state ) => ( { ...state, location: [ ...locations ] } ) ),
    developers: [],
    setDevelopers: ( developers: string[] ) =>
        set( ( state ) => ( { ...state, developers: [ ...developers ] } ) ),
    configuration: [],
    setConfiguration: ( configs: number[] ) =>
        set( ( state ) => ( { ...state, configuration: [ ...configs ] } ) ),
    minPrice: 2,
    setMinPrice: ( minPrice ) => set( ( state ) => ( { ...state, minPrice } ) ),
    maxPrice: 50,
    setMaxPrice: ( maxPrice ) => set( ( state ) => ( { ...state, maxPrice } ) )
} ) );
