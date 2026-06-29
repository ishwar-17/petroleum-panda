import { getDb } from "../db";

export const createRepository = <
  T extends {
    id: string;
  }
>(
  storeName: string,
  seedData: T[] = []
) => ({
  async getAll(): Promise<T[]> {
    const db = await getDb(storeName, seedData);
    return db.getAll(storeName);
  },

  async getById(id: string): Promise<T | undefined> {
    const db = await getDb(storeName, seedData);
    return db.get(storeName, id);
  },

  async create(entity: T): Promise<T> {
    const db = await getDb(storeName, seedData);
    await db.put(storeName, entity);
    return entity;
  },

  async update(
    id: string,
    updates: Partial<T>
  ): Promise<T | null> {
    const db = await getDb(storeName, seedData);
    const existing = await db.get(storeName, id);
    if (!existing) {
      return null;
    }
    const updated = {
      ...existing,
      ...updates,
    };
    await db.put(storeName, updated);
    return updated;
  },

  async delete(id: string): Promise<void> {
    const db = await getDb(storeName, seedData);
    await db.delete(storeName, id);
  },
});