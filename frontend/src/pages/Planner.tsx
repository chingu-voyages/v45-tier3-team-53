import { GoogleMapContainer } from "../components/GoogleMapContainer.tsx";
import {Itinerary} from "../components/Itinerary.tsx";

export const Planner = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
          <Itinerary />
      </div>
      <div>
        <GoogleMapContainer />
      </div>
    </div>
  );
};
