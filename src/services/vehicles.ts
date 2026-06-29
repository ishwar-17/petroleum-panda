import { Vehicle } from "../types";

const getAllVehicles = async() => {
    const response = await fetch('/api/vehicles');
    return response.json();
};

const createVehicle =  async(payload: Omit<Vehicle, 'id'>) => {
    const finalPayload = {
        ...payload,
        type: 'Tanker',
    }
    const response = await fetch('/api/vehicles', {
        method: 'POST',
        body: JSON.stringify(finalPayload)
    });
    return response.json();
};

const deleteVehicle = async (id: string) => {
  const response = await fetch(`/api/vehicles/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete vehicle");
  }

  return response.json();
};

export { getAllVehicles, createVehicle, deleteVehicle };