import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { NewTripForm } from "./components/NewTripForm.tsx";

const libraries: Libraries = ["places", "maps"];

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  localStorage.setItem("isLoaded", String(isLoaded));

  return <NewTripForm />;
}

export default App
