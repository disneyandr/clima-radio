import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import PillButton from "../components/PillBtton";
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
          <div className={styles.header__container}>
            <div className={styles.iconText}>
              <FaHome />
              <span>Home</span>
            </div>
            <div className={[styles.iconText, styles.iconTextGray].join(' ')}>
              <FaSearch />
              <span>Search</span>
            </div>
          </div>

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
