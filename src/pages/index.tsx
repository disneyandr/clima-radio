import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

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
          <div className={styles.sidebar__container}>

            <div className={styles.sidebar__tools}>
              <div className={styles.tools_titulo}>
                <FaRegListAlt />
                <span>Your Library</span>
              </div>
              <div className={styles.tools_cta}>
                <FaPlus />
                <FaArrowRight />
                <FaArrowLeft className={styles.hidden} />
              </div>
            </div>
            <div className={styles.sidebar__card}>
              <div className={styles.card_textos}>

                <div className={styles.card_titulo}>
                  Create your first playlist
                </div>
                <div className={styles.card_text}>
                  It's easy, we'll help you
                </div>
              </div>
              <PillButton backgroundColor="#FFF" text="Creat playlist" textColor="#000" maxWidht="8rem" />
            </div>
            <div className={styles.sidebar__card}>
              <div className={styles.card_textos}>

                <div className={styles.card_titulo}>
                  Let's find some podecasts to follow
                </div>
                <div className={styles.card_text}>
                  We'll keep you updated on new episodes
                </div>
              </div>
              <PillButton backgroundColor="#FFF" text="Browse podcasts" textColor="#000" maxWidht="9.8rem" />
            </div>
          </div>
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
