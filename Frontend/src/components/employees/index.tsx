import type { Employee } from "../../types";

export default function Employees() {
  const staff: Employee[] = [
    { name: "Ravi", role: "Scooper", salary: 12000 },
    { name: "Meena", role: "Cashier", salary: 15000 }
  ];

  return (
    <div>
      <h2>Employees 👨‍🍳</h2>

      {staff.map((s, i) => (
        <div key={i} className="card">
          {s.name} - {s.role} - ₹{s.salary}
        </div>
      ))}
    </div>
  );
}