import {GoogleMapContainer} from "../components/GoogleMapContainer.tsx";

interface PlannerProp {
    destination: Location;
}

export const Planner = ({ destination }: PlannerProp) => {
    return (
        <div className="grid grid-cols-2">
            <div>
                itinerary
            </div>
            <div>
                <GoogleMapContainer destination={destination} />
            </div>
        </div>
    )
}