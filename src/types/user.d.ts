interface IUser {
  accessToken: string;
  email: string;
  name: string;
  password: string;
}

interface ISigninBody {
  email: string;
  password: string;
}

interface ISignupBody {
  name: string;
  email: string;
  password: string;
}