import ModalDemo from "./components/ModalDemo";
import DropdownDemo from "./components/DropdownDemo";
import TabsDemo from "./components/TabsDemo";
import SelectDemo from "./components/SelectDemo";
import ToggleDemo from "./components/ToggleDemo";

export default function App() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Component Library Demo</h1>

      <ModalDemo />
      <DropdownDemo />
      <TabsDemo />
      <SelectDemo />
      <ToggleDemo />
    </div>
  );
}
