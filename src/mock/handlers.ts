
import { createCrudHandlers } from "./handlers/createCrudHandlers";
import { driversRepository, hubsRepository, ordersRepository, terminalsRepository, vehiclesRepository } from "./repository";

export const handlers = [
  ...createCrudHandlers("/api/hubs", hubsRepository),
  ...createCrudHandlers("/api/drivers", driversRepository),
  ...createCrudHandlers("/api/vehicles", vehiclesRepository),
  ...createCrudHandlers("/api/terminals", terminalsRepository),
  ...createCrudHandlers("/api/orders", ordersRepository),

];

