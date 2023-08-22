import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const NewTripForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleSubmit = () => {
        setIsOpen(false);
        // navigate to trip planning page
        // send request to back end
    }

    return (
        <>
            <button onClick={handleOpen}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                test
            </button>
            <Dialog className="relative z-10" open={isOpen} onClose={handleClose}>
                <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-sm rounded bg-white">
                        <Dialog.Title>Plan your next trip</Dialog.Title>
                        <button className="rounded-md bg-black bg-opacity-10"
                            onClick={handleSubmit}>Start planning</button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}