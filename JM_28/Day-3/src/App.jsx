import Dashboard from "./Dashboard";
import Panel from "./Panel";
import UserInfo from "./UserInfo";

function App() {
  const user = {
    name: "Jagamohan",
    role: "Data scientist apsirant"
  };

  return (
    <Dashboard>
      <Panel>
        <UserInfo user={user} />
      </Panel>
    </Dashboard>
  );
}

export default App;
