import { useRouter } from "next/router";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { currentUserKey, getCurrentUser } from "@/utils";

export function useCurrentUser(): any {
  const queryClient = useQueryClient();
  const router = useRouter();

  const query = useQuery(currentUserKey, getCurrentUser, {
    onSuccess: (data) => {
      toast.success('Successfully got current user');
    },
    onError: (error) => toast.error('Failed to get current user')
  });

  return query;
}
