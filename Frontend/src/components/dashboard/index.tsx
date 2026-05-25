import { useState } from "react";
import "../../styles/dashboard.scss";

interface Sales {
  today: number;
  month: number;
  expenses: number;
}

export default function Dashboard() {
  const [sales] = useState<Sales>({
    today: 5200,
    month: 148000,
    expenses: 60000
  });

  const profit: number = sales.month - sales.expenses;

  return (
    <div className="dashboard">
      <h1>Dashboard 📊</h1>

      <div className="cards">
        <div className="card">Today Sales: ₹{sales.today}</div>
        <div className="card">Monthly Sales: ₹{sales.month}</div>
        <div className="card">Expenses: ₹{sales.expenses}</div>
        <div className="card profit">Profit: ₹{profit}</div>
      </div>
    </div>
  );
}