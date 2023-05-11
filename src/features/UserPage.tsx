import { useCurrentUser } from "../hooks/useCurrentUser";

export default function UserPage() {
  const { data: user } = useCurrentUser();
  console.log('user', user);
  return (
    <div>
      <h1>User</h1>
    </div>
  )
}