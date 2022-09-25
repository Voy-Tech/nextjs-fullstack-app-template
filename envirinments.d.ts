namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    NEXTAUTH_URL: string;
    NEXT_PUBLIC_CLIENT_SECRET: string;
    NEXT_PUBLIC_CLIENT_ID: string;
    JWT_SECRET: string;
  }
}
