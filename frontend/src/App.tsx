import {TestContainer} from "./components/TestContainer.tsx";
import {Libraries, useJsApiLoader} from "@react-google-maps/api";

const libraries: Libraries = ["places", "maps"];

function App() {

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  })

  localStorage.setItem("isLoaded", String(isLoaded))

  return (
      <TestContainer />
  )
}

export default App
