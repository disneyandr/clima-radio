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
import { FaSpotify } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


import PillButton from "../components/PillBtton";
import CircleButton from "../components/CircleBtton";
import TextButton from "../components/TextButton";
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
        <header className={styles.header}>
          <div className={styles.header__container}>
            <div className={styles.iconText}>
              <FaSpotify />
              <span>Spotify</span>
            </div>
            <div className={styles.iconText}>
              <FaHome />
              <span>Home</span>
            </div>
            <div className={[styles.iconText, styles.iconTextGray].join(' ')}>
              <FaSearch />
              <span>Search</span>
            </div>
          </div>

        </header>
        <aside className={styles.sidebar}>
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
              <PillButton backgroundColor="#FFF" text="Creat playlist" textColor="#000" width="8rem" />
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
              <PillButton backgroundColor="#FFF" text="Browse podcasts" textColor="#000" width="9.8rem" />
            </div>
          </div>
        </aside>
        <div className={styles.content}>
          <div className={styles.content__container}>
            <nav className={styles.container_navbar}>
              <div className={styles.nav_container}>
                <div className={styles.nav_icons}>

                  <CircleButton backgroundColor="#050505" fontSize="1rem" icon={<FaAngleLeft />} textColor="#FFF" />
                  <CircleButton backgroundColor="#050505" fontSize="1rem" icon={<FaAngleRight />} textColor="#FFF" />
                </div>
                <div className={styles.textAndButton}>
                  <div className={styles.text}>

                    <TextButton textColor="#8F8F8F" text="Premium" />
                    <TextButton textColor="#8F8F8F" text="Suport" />
                    <TextButton textColor="#8F8F8F" text="Download" />
                    <span style={{ color: '#FFF' }}> | </span>
                    <TextButton textColor="#8F8F8F" text="Sign UP" />
                  </div>
                  <PillButton backgroundColor="#FFF" text="Log In" fontSize="18px" />

                </div>
              </div>
            </nav>
            <div className={styles.container_playList}>
              <div className={styles.playlist_textLink}>
                <TextButton textColor="#FFF" text="Spotify Playlists" fontSize="1.5rem" fontWeigth="bold" />
                <TextButton textColor="#8F8F8F" text="Show all" />
              </div>
              <div className={styles.playlist_siteMap}></div>
              <hr />
              <div className={styles.playlist_footer}></div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.textos}>
              <span className={styles.titulo}>Preview of Spotify</span>
              <span>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</span>
            </div>
            <PillButton backgroundColor="#FFF" text="Sign up free" textColor="#000" width="8rem" />
          </div>
        </footer>
      </main>
    </>
  );
}
