// mocks/handlers/createCrudHandlers.ts

import { http, HttpResponse } from "msw";

type Repository<T extends { id: string }> = {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | undefined>;
  create(entity: T): Promise<T>;
  update(id: string, updates: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<void>;
};

export const createCrudHandlers = <
  T extends {
    id: string;
  }
>(
  baseUrl: string,
  repository: Repository<T>
) => [
  http.get(baseUrl, async () => {
    const items = await repository.getAll();
    return HttpResponse.json(items);
  }),

  http.get(`${baseUrl}/:id`, async ({ params }) => {
    const item = await repository.getById(
      params.id as string
    );
    if (!item) {
      return new HttpResponse(null, {
        status: 404,
      });
    }
    return HttpResponse.json(item);
  }),

  http.post(baseUrl, async ({ request }) => {
    const payload = (await request.json()) as Omit<
      T,
      "id"
    >;
    const createdItem = {
      id: crypto.randomUUID(),
      ...payload,
    } as T;
    await repository.create(createdItem);
    return HttpResponse.json(createdItem, {
      status: 201,
    });
  }),

  http.put(`${baseUrl}/:id`, async ({ request, params }) => {
    const updated = await repository.update(
      params.id as string,
      (await request.json()) as Partial<T>
    );
    if (!updated) {
      return new HttpResponse(null, {
        status: 404,
      });
    }
    return HttpResponse.json(updated);
  }),

  http.delete(`${baseUrl}/:id`, async ({ params }) => {
    const item = await repository.getById(
      params.id as string
    );
    if (!item) {
      return new HttpResponse(null, {
        status: 404,
      });
    }
    await repository.delete(params.id as string);
    return HttpResponse.json(
      { success: true },
      { status: 200 }
    );
  }),
];