type Data = {
  message: string
}

type TProps = Pick<AppProps, "Component" | "pageProps"> & {
  userList: User[];
};
