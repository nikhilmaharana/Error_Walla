import { Listbox } from "@headlessui/react";
import { useState } from "react";

const options = ["React", "Vue", "Angular"];

export default function SelectDemo() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-60">
        <Listbox.Button className="w-full px-4 py-2 border rounded bg-white">
          {selected}
        </Listbox.Button>

        <Listbox.Options className="absolute mt-1 w-full bg-white shadow rounded">
          {options.map((option) => (
            <Listbox.Option
              key={option}
              value={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
