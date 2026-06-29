import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllDrivers, createDriver, deleteDriver } from "../../services/drivers";

const useFetchAllDrivers = () => {
    return useQuery({
        queryKey: ['drivers'],
        queryFn: getAllDrivers
    });
}

const useCreateDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDriver,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["drivers"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export const useDeleteDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDriver,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["drivers"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export { useFetchAllDrivers, useCreateDriver }; 
