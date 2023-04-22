import { useGetDevelopers, useGetFilterLocations } from "@src/hooks";
import { useFilterStore } from "@src/store";
import { CSS } from "@src/styles";
import { useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { CheckBoxRoot } from "../CheckBox";
import { DialogTitle } from "../Dialog";
import { Flex } from "../Flex";
import { Input } from "../Input";
import {
    SliderRange,
    SliderRoot,
    SliderThumb,
    SliderTrack
} from "../RangeSlider";
import { Separator } from "../Separator";
import { Text } from "../Text";

const filterDialogCss: CSS = {
    maxWidth: "$mobileL",
    width: "$mobileS",
    "@bp1": {
        width: "$mobileL"
    }
};

const configurations: number[] = [ 2, 3, 4, 5, 6, 7, 8, 9 ];

interface FilterFormProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterForm = ( { setOpen }: FilterFormProps ) => {
    const {
        configuration: storeConfigurations,
        location: storeLocations,
        developers: storeDevelopers,
        setConfiguration: setConfigurations,
        setLocation: setLocations,
        setDevelopers: setDevelopers,
        minPrice: storeMinPrice,
        setMinPrice,
        maxPrice: storeMaxPrice,
        setMaxPrice
    } = useFilterStore( ( state ) => state );

    const { data: developers } = useGetDevelopers();
    const { data: locations } = useGetFilterLocations();

    const [ configs, setconfigs ] = useState<number[]>( storeConfigurations ?? [] );
    const [ locationsInput, setLocationsInput ] = useState<string[]>(
        storeLocations ?? []
    );
    const [ developersInput, setDevelopersInput ] = useState<string[]>(
        storeDevelopers ?? []
    );
    const [ minPriceInput, setMinPriceInput ] = useState( storeMinPrice );
    const [ maxPriceInput, setMaxPriceInput ] = useState( storeMaxPrice );

    const applyFilters = () => {
        setConfigurations( configs );
        setLocations( locationsInput );
        setDevelopers( developersInput );
        setMinPrice( minPriceInput );
        setMaxPrice( maxPriceInput );
        setOpen( false );
    };

    const resetFilters = () => {
        setConfigurations( [] );
        setconfigs( [] );
        setLocations( [] );
        setLocationsInput( [] );
        setDevelopers( [] );
        setDevelopersInput( [] );
        setMinPrice( 2 );
        setMinPriceInput( 2 );
        setMaxPrice( 50 );
        setMaxPriceInput( 50 );
    };

    return (
        <Flex direction="column" css={filterDialogCss}>
            <DialogTitle>
                <Text
                    align="center"
                    typography={"dtHeading3"}
                    css={{ width: "100%", mb: "$2" }}
                >
                    Filters
                </Text>
            </DialogTitle>
            <Flex direction="column" gap="1">
                <Separator orientation="horizontal" />

                <Flex direction="column">
                    <Text typography={"dtHeading3"}>Price</Text>
                    <Text typography={"dtPara3"}>Prices listed in Crores</Text>
                </Flex>
                <Flex direction="column" gap="2" css={{ mb: "$2" }}>
                    <SliderRoot
                        defaultValue={[ minPriceInput, maxPriceInput ]}
                        min={2}
                        max={50}
                        step={2}
                        aria-label="Price"
                        value={[ minPriceInput, maxPriceInput ]}
                        onValueChange={( e ) => {
                            const [ min, max ] = e;
                            setMinPriceInput( min );
                            setMaxPriceInput( max );
                        }}
                    >
                        <SliderTrack>
                            <SliderRange />
                        </SliderTrack>
                        <SliderThumb />
                        <SliderThumb />
                    </SliderRoot>
                    <Flex align="center" justify="spaceBetween">
                        <Text>Min: {minPriceInput} Cr</Text>
                        <Text>Max: {maxPriceInput} Cr</Text>
                    </Flex>
                </Flex>

                <Separator orientation="horizontal" />

                <Flex direction="column">
                    <Text typography={"dtHeading3"}>Configuration</Text>
                    <Text typography={"dtPara3"}>in BHK</Text>
                </Flex>
                <Flex gap="1" css={{ flexWrap: "wrap" }}>
                    {configurations.map( ( config, key ) => (
                        <CheckBoxRoot
                            key={key}
                            name="configuration"
                            value={config}
                            checked={configs.includes( config )}
                            onCheckedChange={( v ) => {
                                if ( v ) {
                                    setconfigs( ( prevValue ) => [
                                        ...prevValue,
                                        config
                                    ] );
                                } else {
                                    setconfigs( ( prevValue ) =>
                                        prevValue.filter( ( el ) => el !== config )
                                    );
                                }
                            }}
                        >
                            <Text>{config === 9 ? `9+` : config}</Text>
                        </CheckBoxRoot>
                    ) )}
                </Flex>

                <Separator orientation="horizontal" />

                <Flex direction="column">
                    <Text typography={"dtHeading3"}>Locations</Text>
                    <Text typography={"dtPara3"}>in and around Mumbai</Text>
                </Flex>
                <Flex gap="1" css={{ flexWrap: "wrap" }}>
                    {locations?.map( ( { location }, key ) => (
                        <CheckBoxRoot
                            key={key}
                            name="configuration"
                            value={location}
                            checked={locationsInput.includes( location )}
                            onCheckedChange={( v ) => {
                                if ( v ) {
                                    setLocationsInput( ( prevValue ) => [
                                        ...prevValue,
                                        location
                                    ] );
                                } else {
                                    setLocationsInput( ( prevValue ) =>
                                        prevValue.filter(
                                            ( el ) => el !== location
                                        )
                                    );
                                }
                            }}
                        >
                            <Text>{location}</Text>
                        </CheckBoxRoot>
                    ) )}
                </Flex>

                <Separator orientation="horizontal" />

                <Flex direction="column">
                    <Text typography={"dtHeading3"}>Developers</Text>
                    <Text typography={"dtPara3"}>Creators of Happy Homes</Text>
                </Flex>
                <Flex gap="1" css={{ flexWrap: "wrap" }}>
                    {developers?.map( ( { developerName }, key ) => (
                        <CheckBoxRoot
                            key={key}
                            name="configuration"
                            value={developerName}
                            checked={developersInput.includes( developerName )}
                            onCheckedChange={( v ) => {
                                if ( v ) {
                                    setDevelopersInput( ( prevValue ) => [
                                        ...prevValue,
                                        developerName
                                    ] );
                                } else {
                                    setDevelopersInput( ( prevValue ) =>
                                        prevValue.filter(
                                            ( el ) => el !== developerName
                                        )
                                    );
                                }
                            }}
                        >
                            <Text>{developerName}</Text>
                        </CheckBoxRoot>
                    ) )}
                </Flex>

                <Flex
                    align="center"
                    justify="center"
                    gap="1"
                    css={{ flexWrap: "wrap-reverse" }}
                >
                    <Button variant={"generalButton"} onClick={resetFilters}>
                        Reset Filters
                    </Button>
                    <Button variant={"generalButton"} onClick={applyFilters}>
                        Apply Filters
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
