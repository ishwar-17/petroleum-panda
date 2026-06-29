import { Driver, Hub, Order, Terminal, Vehicle } from "@/src/types";
import { hubs as initialHubs, drivers as initialDrivers, vehicles as initialVehicles, terminals as initialTerminals, orders as initialOrders } from "../data";
import { createRepository } from "./createRepository";

const hubsRepository =
  createRepository<Hub>(
    "hubs",
    initialHubs
);

const driversRepository =
  createRepository<Driver>(
    "drivers",
    initialDrivers
  );

const vehiclesRepository =
  createRepository<Vehicle>(
    "vehicles",
    initialVehicles
  );

const terminalsRepository =
  createRepository<Terminal>(
    "terminals",
    initialTerminals
  );

const ordersRepository = 
   createRepository<Order>(
    "orders",
    initialOrders
  );

export { hubsRepository, driversRepository, vehiclesRepository, terminalsRepository, ordersRepository };