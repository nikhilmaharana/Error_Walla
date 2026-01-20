import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function ToggleDemo() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-indigo-600" : "bg-gray-300"} 
          relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${enabled ? "translate-x-6" : "translate-x-1"} 
            inline-block h-4 w-4 transform bg-white rounded-full`}
        />
      </Switch>

      <span>{enabled ? "Enabled" : "Disabled"}</span>
    </div>
  );
}
