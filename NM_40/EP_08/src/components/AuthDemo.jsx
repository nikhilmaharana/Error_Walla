import { useState } from "react";
import useAuth from "../hooks/useAuth";

const AuthDemo = () => {
  const [name, setName] = useState("");
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h3>useAuth Demo</h3>

      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => login(name)}>Login</button>
        </>
      )}
    </div>
  );
};

export default AuthDemo;
