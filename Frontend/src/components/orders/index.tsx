import { useState } from "react";
import type { Order } from "../../types";

export default function Orders() {
  const [orders] = useState<Order[]>([
    { id: 1, name: "Arun", item: "Chocolate Storm", qty: 2 },
    { id: 2, name: "Kiran", item: "Mango Heaven", qty: 1 }
  ]);

  return (
    <div>
      <h2>Orders 🛒</h2>

      {orders.map((o) => (
        <div key={o.id} className="card">
          {o.name} ordered {o.qty} {o.item}
        </div>
      ))}
    </div>
  );
}