import { ReactNode } from "react";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Inventory {
  diesel: number;
  petrol: number;
}

export enum StatusType {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

export type StatusTypeValue = `${StatusType}`;

export interface RowProps {
  children: ReactNode;
  className?: string;
}

export type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProps {
  children: ReactNode;
  size?: ColSize;
  className?: string;
  padding?: string;
  margin?: string;
}

export type ColumnParams = {
  onEdit?: (id: string) => void;
  onDelete: (id: string) => void;
}