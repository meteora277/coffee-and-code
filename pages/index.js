import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Cta from "../components/Cta";
import Skills from "../components/Skills";
import MissionStatement from "../components/MissionStatement";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Web Developer</title>
        <meta name="description" content="Justin Diaz's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar>
          <Navbar.Item text="Home" link="/" />
          <Navbar.Item text="About" link="/" />
          <Navbar.Item text="Contact" link="/" />
        </Navbar>
        <Cta />
        <MissionStatement />
        <Skills />
      </main>
    </div>
  );
}
