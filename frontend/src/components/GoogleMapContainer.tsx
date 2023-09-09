import { GoogleMap } from "@react-google-maps/api";
import LatLngBoundsLiteral = google.maps.LatLngBoundsLiteral;
import { useAppSelector } from "../hooks.ts";

export const GoogleMapContainer = () => {
  const isLoaded = useAppSelector((state) => state.api.isLoaded);
  if (!isLoaded) {
    return <div>loading...</div>;
  }
  return <Map />;
};

const Map = () => {
  const destination = useAppSelector((state) => state.trip.destination);
  const start = {
    lat: destination.coordinate.lat,
    lng: destination.coordinate.lng,
  };
  const onLoad = (map: google.maps.Map) => {
    const bounds: LatLngBoundsLiteral = {
      east: destination.neBound.lng,
      north: destination.neBound.lat,
      west: destination.swBound.lng,
      south: destination.swBound.lat,
    };
    map.fitBounds(bounds);
  };
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };
  return (
    <GoogleMap
      center={start}
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
    >
      <></>
    </GoogleMap>
  );
};
