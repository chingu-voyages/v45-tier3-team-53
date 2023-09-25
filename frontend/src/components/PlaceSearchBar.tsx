import { FunctionComponent } from "react";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { Combobox } from "@headlessui/react";
import LatLngLiteral = google.maps.LatLngLiteral;
import { setDestination } from "../store/tripReducer.ts";
import { useAppDispatch, useAppSelector } from "../hooks.ts";

export interface Location {
  coordinate: LatLngLiteral;
  name: string;
  neBound: LatLngLiteral;
  swBound: LatLngLiteral;
}

const Places: FunctionComponent<{
  placeType: string;
  content: string[];
  setContent: (content: string[]) => void;
}> = ({ placeType = "(regions)", content, setContent }) => {
  const dispatch = useAppDispatch();
  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ requestOptions: { types: [placeType] } });

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    const result = results[0];
    const destination: Location = {
      coordinate: result.geometry.location.toJSON(),
      name: result.address_components[0].long_name,
      neBound: result.geometry.viewport.getNorthEast().toJSON(),
      swBound: result.geometry.viewport.getSouthWest().toJSON(),
    };
    dispatch(setDestination(destination));
    if (setContent) {
      setContent([...content, address]);
    }
  };

  return (
    // could make the className conditional, so it can be reusable and doesn't highlight in other places
    <div className="relative w-full rounded-md focus-within:ring focus-within:ring-amber-300">
      <Combobox value={value} onChange={handleSelect}>
        <div className="flex items-center rounded-lg p-1 justify-start focus-within:outline-black w-full">
          <div className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <Combobox.Input
            placeholder="Search for a place"
            className="p-1 focus:ring-0 outline-none w-full"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <Combobox.Options className="absolute w-full z-50 bg-white max-h-60 overflow-auto rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {status == "OK" &&
            data.map(({ place_id, description }) => (
              <Combobox.Option
                key={place_id}
                className={({ active }) =>
                  `relative w-full cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-gray-200" : "text-gray-900"
                  }`
                }
                value={description}
              >
                {description}
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export const PlaceSearchBar: FunctionComponent<{
  placeType: string;
  content: string[];
  setContent: (content: string[]) => void;
}> = ({ placeType = "(regions)", content, setContent }) => {
  const isLoaded = useAppSelector((state) => state.api.isLoaded);
  if (!isLoaded) return <div>loading...</div>;
  return (
    <Places placeType={placeType} content={content} setContent={setContent} />
  );
};
