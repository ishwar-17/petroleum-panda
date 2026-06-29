import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllTerminals, createTerminal, deleteTerminal } from "../../services/terminals";

const useFetchAllTerminals = () => {
    return useQuery({
        queryKey: ['terminals'],
        queryFn: getAllTerminals
    });
}

const useCreateTerminal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTerminal,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["terminals"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

const useDeleteTerminal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTerminal,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["terminals"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export { useFetchAllTerminals, useCreateTerminal, useDeleteTerminal }; 