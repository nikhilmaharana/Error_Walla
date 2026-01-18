import { Dialog } from "@headlessui/react"
import { useState } from "react"

function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded shadow">
            <Dialog.Title className="text-lg font-bold">
              Headless UI Modal
            </Dialog.Title>
            <p className="mt-2">
              Modal built using Headless UI + Tailwind
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-3 py-1 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default Modal
