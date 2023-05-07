import { UseMutateFunction, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { currentUserKey } from "../utils/constants";

function postSignup(body: any): any {
  return fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body,
  })
}

export default function useSignup(): any {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation(
    postSignup, {
    onSuccess: (data) => {
      toast.success('Sign-up success');
      queryClient.invalidateQueries({ queryKey: currentUserKey });
      router.push('/');
    },
    onError: (error) => toast.error('Sign-up failed')
  });

  return mutation;
}
