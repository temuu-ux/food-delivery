import Head from "next/head";
import Login from "@/component/login/LogIn";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <Head>
        <title>Food Delivery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device=width, initial-scale=1" />
        <link rel="icon" href="/Main.svg" />
      </Head>
      <Stack alignItems={"center"}>
        <Login />
      </Stack>
    </>
  );
};
export default Home;
