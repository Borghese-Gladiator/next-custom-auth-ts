// components/Layout.jsx
import Link from "next/link";

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home Page</a>
        </Link>

        <Link href="/signup">
          <a>SignUp</a>
        </Link>

        <Link href="/signin">
          <a>SignIn</a>
        </Link>
      </nav>

      <main>{children}</main>
    </>
  );
}