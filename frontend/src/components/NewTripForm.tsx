import { useState } from "react";
import { Dialog } from "@headlessui/react";
import DatePicker from "react-datepicker";
import { PlaceSearchBar } from "./PlaceSearchBar.tsx";

import "react-datepicker/dist/react-datepicker.css";

export const NewTripForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFromDate = (date: Date) => {
    if (toDate != null && date >= toDate) {
      setToDate(null);
    }
    setFromDate(date);
  };

  const handleSubmit = () => {
    setIsOpen(false);
    // navigate to trip planning page
    // send request to back end
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Plan Your Trip
      </button>
      <Dialog className="relative z-10" open={isOpen} onClose={handleClose}>
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-xl rounded bg-white px-20">
            <div className="flex flex-col items-center">
              <Dialog.Title className="text-xl font-medium">
                Plan your next trip
              </Dialog.Title>
              <div className="w-full my-2">
                <div className="mx-1">Where to?</div>
                <PlaceSearchBar />
              </div>
              <div className="flex items-center w-full my-2 justify-between">
                <div className="mx-1">
                  <div>From:</div>
                  <div>
                    <DatePicker
                      className="border-black border rounded"
                      selected={fromDate}
                      openToDate={new Date()}
                      minDate={new Date()}
                      onChange={(date: Date) => handleFromDate(date)}
                      placeholderText="Select your start date"
                    />
                  </div>
                </div>
                <div className="mx-1">
                  <div>To:</div>
                  <div>
                    <DatePicker
                      className="border-black border rounded"
                      selected={toDate}
                      minDate={fromDate}
                      onChange={(date: Date) => setToDate(date)}
                      placeholderText="Select your end date"
                    />
                  </div>
                </div>
              </div>
              <button
                className="rounded-md bg-black bg-opacity-10 px-4 py-2 my-5"
                onClick={handleSubmit}
              >
                Start planning
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
