import React, { useRef } from "react";
import { standaloneSearchBox, LoadScript } from "@react-google-maps/api";



const Place = () => {

    const inputRef = useRef();

    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();

        if (place) {
            console.log(place.formatted_address);
            console.log(place.geometry.location.lat());
            console.log(place.geometry.location.long());
        }
    };


    return (

        <LoadScript
        googleMapsApiKey=""
        // libraries=(["Places"])
        >
            
            <standaloneSearchBox
                onLoad={ref => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Location"
                />

            </standaloneSearchBox>
        </LoadScript>
    )
}
export default Place;