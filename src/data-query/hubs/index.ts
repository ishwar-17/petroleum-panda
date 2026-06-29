import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createHub, deleteHub, getAllHubs } from "../../services/hubs";

const useFetchAllHubs = () => {
    return useQuery({
        queryKey: ['hubs'],
        queryFn: getAllHubs
    });
}

const useCreateHub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createHub,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["hubs"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

const useDeleteHub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteHub,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["hubs"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export { useFetchAllHubs, useCreateHub, useDeleteHub }; 
