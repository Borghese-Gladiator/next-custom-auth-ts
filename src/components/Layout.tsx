import { Box, Button, Drawer, LinkProps, Link as MuiLink } from "@mui/material";
import NextLink from 'next/link';
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Layout({ children, ...props }: any): JSX.Element {
  return (
    <div>
      <NavDrawer {...props} />
      <ErrorBoundary>
        <main>{children}</main>
      </ErrorBoundary>
    </div>
  );
}

// Link code from: https://gist.github.com/kachar/028b6994eb6b160e2475c1bb03e33e6a
function Link(props: LinkProps<'a'>) {
  return <MuiLink component={NextLink} {...props} />
}

function NavDrawer({ userList = [] }: any) {
  return (
    <Drawer variant="permanent">
      <Box
        p={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link href="/" variant="h2" underline="none">
          Home Page
        </Link>
        <Link href="/signup" variant="h2" underline="none">
          SignUp
        </Link>
        <Link href="/signin" variant="h2" underline="none">
          SignIn
        </Link>
        <div>
          {userList.map(({ id, name }: any) => {
            return (
              <Link href={`/user/${id}`} variant="body1" underline="none">
                {name}
              </Link>
            );
          })}
        </div>
      </Box>
    </Drawer>
  )
}
