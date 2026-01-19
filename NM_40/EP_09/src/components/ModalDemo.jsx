import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Open Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded shadow w-80">
            <Dialog.Title className="text-lg font-semibold">
              Headless UI Modal
            </Dialog.Title>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
