export default function Payroll() {
    const salaries = [
      { name: "Ravi", paid: true },
      { name: "Meena", paid: false }
    ];
  
    return (
      <div>
        <h2>Payroll 💰</h2>
  
        {salaries.map((s, i) => (
          <div key={i} className="card">
            {s.name} - {s.paid ? "Paid ✅" : "Pending ❌"}
          </div>
        ))}
      </div>
    );
  }