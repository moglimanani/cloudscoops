import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";

import Dashboard from "./components/dashboard";
import Menus from "./components/menus";
import Employees from "./components/employees";
import Payroll from "./components/payroll";
import Audit from "./components/audit";
import Orders from "./components/orders";

export default function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/audit" element={<Audit />} />
        </Routes>
      </div>
    </div>
  );
}