import { Terminal } from "../types";
import { TerminalPayload } from "../types/hubs.type";

const getAllTerminals = async() => {
    const response = await fetch('/api/terminals');
    return response.json();
};

const createTerminal = async(payload: TerminalPayload) => {
    const finalPayload = {
        name: payload.name,
        address: payload.name,
        inventory: {
            diesel: payload.diesel,
            petrol: payload.petrol,
        },
        coordinates: {
            lat: payload.lat,
            lng: payload.lng,
        },
        type: 'terminal',
    }
    const response = await fetch('/api/terminals', {
        method: 'POST',
        body: JSON.stringify(finalPayload)
    });
    return response.json();
};

const deleteTerminal = async (id: string) => {
  const response = await fetch(`/api/terminals/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete terminal");
  }

  return response.json();
};

export { getAllTerminals, createTerminal, deleteTerminal };