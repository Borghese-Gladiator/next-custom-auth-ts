// process.env in TypeScript - https://stackoverflow.com/questions/45194598/using-process-env-in-typescript

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
			TOKEN_SECRET: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}