import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllVehicles, createVehicle, deleteVehicle } from "../../services/vehicles";

const useFetchAllVehicles = () => {
    return useQuery({
        queryKey: ['vehicles'],
        queryFn: getAllVehicles
    });
}

const useCreateVehicle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createVehicle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

const useDeleteVehicle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteVehicle,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export { useFetchAllVehicles, useCreateVehicle, useDeleteVehicle }; 