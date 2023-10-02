import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { NewTripForm } from './components/NewTripForm.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Planner } from './pages/Planner.tsx';
import { useAppDispatch } from './hooks.ts';
import { setIsLoaded } from './store/apiReducer.ts';

const libraries: Libraries = ['places', 'maps'];

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const dispatch = useAppDispatch();

  dispatch(setIsLoaded(isLoaded));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewTripForm />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
