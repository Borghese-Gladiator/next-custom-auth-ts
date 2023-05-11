import { LinkProps, Button, Drawer, Link as MuiLink } from "@mui/material";
import NextLink from 'next/link'

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <NavDrawer />
      <main>{children}</main>
    </div>
  );
}

// Link code from: https://gist.github.com/kachar/028b6994eb6b160e2475c1bb03e33e6a
function Link(props: LinkProps<'a'>) {
  return <MuiLink component={NextLink} {...props} />
}

function NavDrawer() {
  return (
    <Drawer variant="permanent">
      <Link href="/" variant="h4" underline="none">
        Home Page
      </Link>
      <Link href="/signup" variant="h4" underline="none">
        SignUp
      </Link>
      <Link href="/signin" variant="h4" underline="none">
        SignIn
      </Link>
    </Drawer>
  )
}
