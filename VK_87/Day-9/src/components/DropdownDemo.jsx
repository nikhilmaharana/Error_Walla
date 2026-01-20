import { Menu } from "@headlessui/react";

export default function DropdownDemo() {
  return (
    <Menu>
      <Menu.Button className="px-4 py-2 bg-gray-800 text-white rounded">
        Options
      </Menu.Button>

      <Menu.Items className="mt-2 w-40 bg-white shadow rounded">
        <Menu.Item>
          {({ active }) => (
            <button className={`block w-full px-3 py-2 ${active && "bg-gray-100"}`}>
              Edit
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <button className={`block w-full px-3 py-2 ${active && "bg-gray-100"}`}>
              Delete
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
