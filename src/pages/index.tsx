import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify - Clima Digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.header}>
          cabecalho
        </div>
        <div className={styles.sidebar}>
          sidebar
        </div>
        <div className={styles.content}>
          conteudo
        </div>
        <div className={styles.footer}>
          footer
        </div>
      </main>
    </>
  );
}
