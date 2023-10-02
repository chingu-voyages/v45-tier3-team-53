import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { PlaceSearchBar } from "./PlaceSearchBar.tsx";
import ContentCard from "./ContentCard.tsx";

const HotelAndLodgingContent: FunctionComponent<{
  hotels: string[];
  setHotels: Dispatch<SetStateAction<string[]>>;
}> = ({ hotels, setHotels }) => {
  return (
    <div className="flex flex-col">
      <PlaceSearchBar
        placeType="lodging"
        content={hotels}
        setContent={setHotels}
      />
      <div className="flex flex-wrap overflow-auto h-96">
        {hotels &&
          hotels.map((hotel) => {
            return <ContentCard title={hotel} />;
          })}
      </div>
    </div>
  );
};
export default HotelAndLodgingContent;
