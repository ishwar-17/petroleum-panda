import { Driver } from "../types";

const getAllDrivers = async() => {
    const response = await fetch('/api/drivers');
    return response.json();
};

const createDriver =  async(payload: Omit<Driver, 'id'>) => {
    const response = await fetch('/api/drivers', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
    return response.json();
};

const deleteDriver = async (id: string) => {
  const response = await fetch(`/api/drivers/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete driver");
  }

  return response.json();
};

export { getAllDrivers, createDriver, deleteDriver };