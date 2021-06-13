import Head from "next/head";
import Header from "../lib/components/Header";
import Works from "../lib/components/Works";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Midhun V Nadh - My Works</title>
      </Head>
      <Header />
      <Works />
    </div>
  );
}
