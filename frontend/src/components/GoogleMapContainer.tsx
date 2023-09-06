import {GoogleMap} from "@react-google-maps/api";
import {Location} from "./PlaceSearchBar.tsx";
import LatLngBounds = google.maps.LatLngBounds;

interface MapProp {
    destination: Location;
}

export const GoogleMapContainer = ({destination}: MapProp) => {
    if (localStorage.getItem("isLoaded") === "false") {
        return <div>loading...</div>;
    }
    return <Map destination={destination}/>;
};

const Map = ({destination}: MapProp) => {
    const start = {
        lat: destination.coordinate.lat,
        lng: destination.coordinate.lng,
    };
    const onLoad = (map: google.maps.Map) => {
        const bounds: LatLngBounds = new LatLngBounds(destination.swBound, destination.neBound);
        map.fitBounds(bounds);
    }
    const containerStyle = {
        width: "100%",
        height: "100vh",
    };
    return (
        <GoogleMap center={start} mapContainerStyle={containerStyle} onLoad={onLoad}>
            <></>
        </GoogleMap>
    );
};
