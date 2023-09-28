import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { NewTripForm } from "./components/NewTripForm.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Planner } from "./pages/Planner.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const libraries: Libraries = ["places", "maps"];

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  localStorage.setItem("isLoaded", String(isLoaded));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewTripForm />} />
          <Route path="/planner" element={<Planner />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
