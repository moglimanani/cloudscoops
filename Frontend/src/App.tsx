import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./modules/dashboard";
import Menus from "./modules/menus";
import Employees from "./modules/employees";
import Payroll from "./modules/payroll";
import Audit from "./modules/audit";
import Orders from "./modules/orders";

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