import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from "next/head";
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
import Disco from "../components/Disco";

// pegando a playlist

import authenticateSpotify from "./api/accessToken";
import getSeveralArtists from "./api/getSeveralArtists";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  const [playlistData, setPlaylistData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function main() {
      try {
        const accessToken = await authenticateSpotify();
        console.log('Token de Acesso Spotify:', accessToken);
// 3JsMj0DEzyWc0VDlHuy9Bx supertramp  4bthk9UfsYUYdcFyqxmSUU tears for fears  36QJpDe2go2KgaRleHCDTp led zepplin 2WT1pbYjLJciAR26yMebkH pink floyd
        const artistIds = ['3JsMj0DEzyWc0VDlHuy9Bx', '4bthk9UfsYUYdcFyqxmSUU', '36QJpDe2go2KgaRleHCDTp'];

        const artistsData = await getSeveralArtists(accessToken, artistIds);
        console.log('Dados de Artistas do Spotify:', artistsData);

        setPlaylistData(artistsData);
        setIsLoading(false); // Agora que os dados foram carregados, definimos isLoading como false
      } catch (error) {
        console.error('Erro:', error.message);
      }
    }

    // Chame a função principal
    main();
  }, []);

  return (
    <>
      <Head>
        <title>Clima Rádio</title>
        <meta name="description" content="Clima Rádio - Clima Digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.header__container}>
            <div className={styles.iconText}>
              <FaSpotify />
              <span>Clima Rádio</span>
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

              <div className={styles.playlist_disco}>
                {isLoading ? (
                  <p>Carregando...</p>
                ) : (
                  <>
                    {playlistData.artists && playlistData.artists.map((artist,index) => (
                      <Disco
                        key={artist.id}
                        image={artist.images[0].url}
                        titulo={artist.name}
                        subTitulo={artist.genres}
                      />
                    ))}
                  </>
                )}
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
