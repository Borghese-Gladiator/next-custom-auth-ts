import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { currentUserKey } from "../utils/constants";

function postSignin(body: any): any {
  return fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body,
  })
}

export default function useSignin(): any {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    postSignin, {
    onSuccess: (data) => {
      toast.success('Sign-in success');
      queryClient.invalidateQueries({ queryKey: currentUserKey });
      router.push('/');
    },
    onError: (error) => toast.error('Sign-in failed')
  });

  return mutation;
}
