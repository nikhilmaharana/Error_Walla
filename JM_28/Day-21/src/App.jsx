import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Layout from "./components/Layout"

// Lazy-loaded pages
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Settings = lazy(() => import("./pages/Settings"))
const Profile = lazy(() => import("./pages/Profile"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h3>Loading page...</h3>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
