import { GoogleMapContainer } from "../components/GoogleMapContainer.tsx";

export const Planner = () => {
  return (
    <div className="grid grid-cols-2">
      <div>itinerary</div>
      <div>
        <GoogleMapContainer />
      </div>
    </div>
  );
};
