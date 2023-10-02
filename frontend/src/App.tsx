import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { NewTripForm } from "./components/NewTripForm.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Planner } from "./pages/Planner.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Register from "./components/Register.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login.tsx";

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
          <Route path="/sign-up" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
