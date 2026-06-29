import { UseFormReturn } from "react-hook-form";
import { Coordinates, Inventory, StatusTypeValue } from "./common.type";
import { Driver } from ".";

// Hub Api Response
export interface Hub {
  id: string;
  code: string;
  name: string;
  type: "hub";
  address: string;
  coordinates: Coordinates;
  inventory: Inventory;
  status: StatusTypeValue
  contactPerson: string;
  contactNumber: string;
}

// Create new Hub Object
export type HubFormFields = Pick<Hub, 'name' | 'code' | 'status' | 'contactNumber' | 'contactPerson'> & Coordinates & Inventory;

export type HubPayload = {
  code: string;
  name: string;
  status: string;
  lat: number;
  lng: number;
  diesel: number;
  petrol: number;
  contactPerson: string;
  contactNumber: string;
  address: string;
};

export type DrawerState = {
  openFormDrawer: boolean;
}

export type DrawerActions = {
  onOpenFormDrawer: (value: boolean) => void
}

export type TerminalPayload = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  diesel: number;
  petrol: number;
}
