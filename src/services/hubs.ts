import { HubPayload } from "../types/hubs.type";

const getAllHubs = async() => {
    const response = await fetch('/api/hubs');
    return response.json();
};

const createHub =  async(payload: HubPayload) => {
    const finalPayload = {
        code: payload.code,
        name: payload.name,
        status: payload.status,
        address: payload.address,
        inventory: {
            diesel: payload.diesel,
            petrol: payload.petrol,
        },
        coordinates: {
            lat: payload.lat,
            lng: payload.lng,
        },
        type: 'hub',
        contactPerson: payload.contactPerson,
        contactNumber: payload.contactNumber,
    };

    const response = await fetch('/api/hubs', {
        method: 'POST',
        body: JSON.stringify(finalPayload)
    });
    return response.json();
};

const deleteHub = async (id: string) => {
  const response = await fetch(`/api/hubs/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete hub");
  }

  return response.json();
};

export { getAllHubs, createHub, deleteHub };