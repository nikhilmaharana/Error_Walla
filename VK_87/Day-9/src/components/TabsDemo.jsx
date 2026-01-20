import { Tab } from "@headlessui/react";

export default function TabsDemo() {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-2 bg-gray-200 p-2 rounded">
        <Tab className={({ selected }) =>
          selected
            ? "px-4 py-2 bg-indigo-600 text-white rounded"
            : "px-4 py-2 bg-white text-black rounded"
        }>
          Profile
        </Tab>

        <Tab className={({ selected }) =>
          selected
            ? "px-4 py-2 bg-indigo-600 text-white rounded"
            : "px-4 py-2 bg-white text-black rounded"
        }>
          Settings
        </Tab>
      </Tab.List>

      <Tab.Panels className="mt-4">
        <Tab.Panel className="p-4 bg-white rounded shadow">
          Profile Content
        </Tab.Panel>
        <Tab.Panel className="p-4 bg-white rounded shadow">
          Settings Content
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
