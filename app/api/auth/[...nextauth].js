import NextAuth from "next-auth";
import { FilemakerAdapter } from "next-auth-adapter-filemaker";

const fmAdapter = FilemakerAdapter({
//   auth: { apiKey: "OTTO_API_KEY" },
  // or, if you don't have Otto on your FM Server
  auth: { username: "admin", password: "kokoroNOo9" },
  db: "FM_DATABASE",
  server: "https://wayodb.com",
});

export default NextAuth({
    adapter: fmAdapter.Adapter
});