import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import User from "./pages/User.tsx";
import Services from "./pages/Services.tsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<User />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;