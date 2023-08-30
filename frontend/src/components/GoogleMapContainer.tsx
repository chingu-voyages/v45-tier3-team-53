import { GoogleMap } from "@react-google-maps/api";

export const GoogleMapContainer = () => {
  if (localStorage.getItem("isLoaded") === "false") {
    return <div>loading...</div>;
  }
  return <Map/>
};

const Map = () => {
  const start = {
    lat: 34,
    lng: -118,
  };
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };
  return <GoogleMap zoom={10} center={start} mapContainerStyle={containerStyle}>
    <></>
  </GoogleMap>;
}
