import { Link, Outlet } from "react-router-dom"

function Layout() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Advanced Routing Demo</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/settings">Settings</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
