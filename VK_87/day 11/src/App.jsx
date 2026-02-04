import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormDemo from "./pages/FormDemo";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12 }}>
        <Link to="/form">Form Demo</Link>
      </nav>

      <Routes>
        <Route path="/form" element={<FormDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
