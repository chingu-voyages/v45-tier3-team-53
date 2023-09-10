import { Tab } from "@headlessui/react";
import { useAppSelector } from "../hooks.ts";

const tabs = [
  "Hotels and Lodging",
  "Food",
  "Transportation",
  "Places to visit",
];

const TitleCard = () => {
  const destination = useAppSelector((state) => state.trip.destination.name);
  return <div>Trip to {destination}</div>;
};
export const Itinerary = () => {
  return (
    <>
      <TitleCard />
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabs.map((title) => (
            <Tab
              key={title}
              className={({ selected }) =>
                `w-full rounded-lg py-2 text-sm font-medium text-blue-600 
                ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 ${
                  selected
                    ? `bg-white shadow`
                    : `hover:bg-white/[0.25] hover:text-black`
                }`
              }
            >
              {title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>hotels and lodging</Tab.Panel>
          <Tab.Panel>food</Tab.Panel>
          <Tab.Panel>transportation</Tab.Panel>
          <Tab.Panel>places to visit</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};
