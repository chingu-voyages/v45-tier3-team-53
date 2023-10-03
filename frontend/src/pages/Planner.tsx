import { GoogleMapContainer } from "../components/GoogleMapContainer.tsx";
import { Itinerary } from "../components/Itinerary.tsx";

export const Planner = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2">
        <Itinerary />
      </div>
      <div className="col-span-3">
        <GoogleMapContainer />
      </div>
    </div>
  );
};
