import Link from "next/link";

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <nav>
        <Link href="/">Home Page</Link>

        <Link href="/signup">SignUp</Link>

        <Link href="/signin">SignIn</Link>
      </nav>

      <main>{children}</main>
    </div>
  );
}