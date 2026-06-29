import { Coordinates, Inventory } from './common.type';

export type { Hub, HubFormFields } from './hubs.type';

export interface Terminal {
  id: string;
  name: string;
  type: "terminal";
  address: string;
  coordinates: Coordinates;
  inventory: Inventory;
}

export interface Driver {
  id: string;
  name: string;
  license: string;
  phone: string;
  address: string;
}

export interface Vehicle {
  id: string;
  registration: string;
  capacity: number;
  type: "Tanker";
}

export type OrderStatus =
  | "assigned"
  | "in-progress"
  | "completed"
  | "failed";

export interface Order {
  id: string;
  destinationId: string;
  product: "diesel" | "petrol";
  quantity: number;
  deliveryDate: string;
  assignedDriverId: string;
  status: OrderStatus;
}

export interface VehicleAllocation {
  id: string;
  driverId: string;
  vehicleId: string;
  date: string;
}

export interface ShiftHistory {
  id: string;
  driverId: string;
  vehicleId: string;
  date: string;
  deliveriesCompleted: number;
}