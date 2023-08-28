import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {Combobox} from "@headlessui/react";

const Places = () => {

    const {
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions,
    } = usePlacesAutocomplete({requestOptions: {types: ['(regions)']}});

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();
        const results = await getGeocode({address});
        const {lat, lng} = getLatLng(results[0]);
        console.log({lat: lat, lng: lng})
        console.log(results[0])
    }

    return (
        <div className="w-full">
            <Combobox value={value} onChange={handleSelect}>
                <div className="flex items-center rounded-lg p-1 justify-start focus-within:outline-black w-full">
                    <div className="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                    </div>
                    <Combobox.Input
                        placeholder="Search for a place"
                        className="p-1 focus:ring-0 outline-none w-full"
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <Combobox.Options
                    className="absolute w-full z-50 bg-white max-h-60 overflow-auto rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {status == "OK" &&
                        data.map(({place_id, description}) => (
                            <Combobox.Option key={place_id} className={({active}) =>
                                `relative w-full cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-gray-200' : 'text-gray-900'
                                }`
                            } value={description}>
                                {description}
                            </Combobox.Option>
                        ))}
                </Combobox.Options>
            </Combobox>
        </div>
    )
}

export const PlaceSearchBar = () => {
    if (localStorage.getItem("isLoaded") === "false") return <div>loading...</div>
    return (
        <Places/>
    )
}