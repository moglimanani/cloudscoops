export default function Audit() {
    const revenue: number = 148000;
    const expense: number = 60000;
  
    return (
      <div>
        <h2>Audit Report 📑</h2>
  
        <div className="card">
          <p>Total Revenue: ₹{revenue}</p>
          <p>Total Expense: ₹{expense}</p>
          <p>Net Profit: ₹{revenue - expense}</p>
        </div>
      </div>
    );
  }