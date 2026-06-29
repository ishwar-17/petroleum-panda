import { Order } from "@/src/types";

export const orders: Order[] = [
  {
    id: "order-1",
    destinationId: "terminal-1",
    product: "diesel",
    quantity: 5000,
    deliveryDate: "2026-06-14",
    assignedDriverId: "driver-1",
    status: "assigned"
  },
  {
    id: "order-2",
    destinationId: "terminal-2",
    product: "petrol",
    quantity: 3000,
    deliveryDate: "2026-06-14",
    assignedDriverId: "driver-2",
    status: "in-progress"
  },
  {
    id: "order-3",
    destinationId: "terminal-4",
    product: "diesel",
    quantity: 2000,
    deliveryDate: "2026-06-13",
    assignedDriverId: "driver-4",
    status: "completed"
  },
  {
    id: "order-4",
    destinationId: "terminal-7",
    product: "petrol",
    quantity: 1500,
    deliveryDate: "2026-06-13",
    assignedDriverId: "driver-7",
    status: "failed"
  }
];