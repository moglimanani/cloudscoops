import { Link } from "react-router-dom";
import '../styles/sidebar.scss'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>☁️ CloudScoops</h2>

      <ul>
        <li><Link to="/">📊 Dashboard</Link></li>
        <li><Link to="/orders">🛒 Orders</Link></li>
        <li><Link to="/menu">🍦 Menu</Link></li>
        <li><Link to="/employees">👨‍🍳 Employees</Link></li>
        <li><Link to="/payroll">💰 Payroll</Link></li>
        <li><Link to="/audit">📑 Audit</Link></li>
      </ul>
    </div>
  );
}