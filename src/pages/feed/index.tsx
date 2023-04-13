import { Home } from "@/components/home/home";
import Head from "next/head";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Socius | Feed</title>
      </Head>
      <Home />;
    </>
  );
}
