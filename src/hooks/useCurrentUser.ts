import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

// TODO(tim): 5/7/2023 - fix import to be @/utils (typescript thingy not figuring out modules correctly)
import { getCurrentUser } from "@/utils/index";
import { currentUserKey } from "@/utils/constants";

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
