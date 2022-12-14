import Head from "next/head";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Petros Chantzopoulos</title>
        <meta name="description" content="Petros Chantzopoulos | Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
}
