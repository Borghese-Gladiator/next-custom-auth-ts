import { UseMutateFunction, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { currentUserKey } from "../utils/constants";

function getCurrentUser({ id }: any): any {
  return fetch(`/api/users/${id}`, {
    method: 'GET'
  })
}

export function useCurrentUser(): any {
  const queryClient = useQueryClient();
  const router = useRouter();

  const query = useQuery(currentUserKey, getCurrentUser, {
    onSuccess: (data) => {
      toast.success('Successfully got current user');
    },
    onError: (error) => toast.error('Failed to get current user')
  });

  const { mutate: signupMutation } = useMutation(
    getCurrentUser, {
    
  });

  return signupMutation;
}
