import { UseMutateFunction, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

async function signIn(email: string, password: string): Promise<IUser> {
  const response = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  if (!response.ok)
    throw new ResponseError('Failed on sign in request', response);

  return await response.json();
}

type IUseSignIn = UseMutateFunction<IUser, unknown, {
  email: string;
  password: string;
}, unknown>

export function useSignin(): IUseSignIn {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signInMutation } = useMutation<IUser, unknown, { email: string, password: string }, unknown>(
    ({
      email,
      password
    }) => signIn(email, password), {
    onSuccess: (data) => {
      toast.success('Sign-in success');
      router.push('/');
    },
    onError: (error) => toast.error('Sign-up failed')
  });

  return signInMutation
}