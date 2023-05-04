import { UseMutateFunction, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

async function signUp(email: string, password: string): Promise<IUser> {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  if (!response.ok)
    throw new ResponseError('Failed on sign up request', response);

  return await response.json();
}

type IUseSignUp = UseMutateFunction<IUser, unknown, {
  email: string;
  password: string;
}, unknown>

export function useSignUp(): IUseSignUp {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signUpMutation } = useMutation<IUser, unknown, { email: string, password: string }, unknown>(
    ({
      email,
      password
    }) => signUp(email, password), {
    onSuccess: (data) => {
      toast.success('Sign-up success');
      router.push('/');
    },
    onError: (error) => toast.error('Sign-up failed')
  });

  return signUpMutation
}