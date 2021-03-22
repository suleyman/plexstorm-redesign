import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import TopChannels from "../components/TopChannels";
import BecomeMember from "../components/BecomeMember";

export default function Home() {
  return (
    <>
      <Head>
        <title>Plexstorm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Intro />
        <TopChannels />
        <BecomeMember />
      </main>
      <Footer />
    </>
  );
}
