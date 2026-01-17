import { useApp } from "../context/AppContext";

export default function ContextDemo() {
  const { theme, toggleTheme, user, setUser } = useApp();

  return (
    <div style={{ padding: 16 }}>
      <h2>Context API Demo</h2>
      <p>Theme: <b>{theme}</b></p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <hr />

      <p>User: <b>{user.name}</b></p>
      <button onClick={() => setUser({ name: "Vivek Kumar" })}>
        Change User Name
      </button>
    </div>
  );
}
