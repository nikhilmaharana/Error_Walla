import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState({ name: "Vivek" });

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const value = useMemo(
    () => ({ theme, toggleTheme, user, setUser }),
    [theme, user]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
