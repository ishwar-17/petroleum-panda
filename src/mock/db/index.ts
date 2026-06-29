import { openDB } from "idb";

const DB_NAME = "fleet-management-db";
const DB_VERSION = 5;

export const STORE_NAMES = [
  "hubs",
  "drivers",
  "vehicles",
  "orders",
  "terminals",
] as const;

export const getDb = async <
  T extends {
    id: string;
  }
>(
  storeName: string,
  seedData?: T[]
) => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      STORE_NAMES.forEach((store) => {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, {
            keyPath: "id",
          });
        }
      });
    },
  });

  if (seedData?.length) {
    const count = await db.count(storeName);
    if (count === 0) {
      const tx = db.transaction(storeName, "readwrite");

      for (const item of seedData) {
        await tx.store.put(item);
      }
      await tx.done;
    }
  }
  return db;
};