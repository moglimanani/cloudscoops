import type { MenuItem } from "../../types";

export default function Menus() {
  const items: MenuItem[] = [
    { name: "Vanilla Dream", price: 60 },
    { name: "Chocolate Storm", price: 90 },
    { name: "Mango Heaven", price: 80 }
  ];

  return (
    <div>
      <h2>Menu 🍦</h2>

      {items.map((i, idx) => (
        <div key={idx} className="card">
          {i.name} - ₹{i.price}
        </div>
      ))}
    </div>
  );
}