import { useQuery } from "@tanstack/react-query";

async function getUser(user: User | null | undefined): Promise<User | null> {
  if (!user) return null;
  const response = await fetch(`/api/users/${user.user.id}`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })
  if (!response.ok)
    throw new ResponseError('Failed on get user request', response);

  return await response.json();
}

/*
export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}

function Posts(props) {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialData: props.posts,
  })

  // ...
}
*/

export function useUser(): IUseUser {
  const { data: user } = useQuery<User | null>(
    [QUERY_KEY.user],
    async (): Promise<User | null> => getUser(user),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: userLocalStorage.getUser,
      onError: () => {
        userLocalStorage.removeUser();
      }
    });

  useEffect(() => {
    if (!user) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  return {
    user: user ?? null,
  }
}

/*
// lib/getUser.js
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import User from "../models/user";

export default async function getUser(req, res) {
  const token = getCookie("token", { req, res });

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    let user = await User.findById(data.userId);
    user = JSON.parse(JSON.stringify(user));
    return user;
  } catch (error) {
    return null;
  }
}
*/