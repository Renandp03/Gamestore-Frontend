import Head from 'next/head'
import styled from 'styled-components';
import Header from '@/components/header'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Game from '@/components/game';


export default function Home() {

  const [games, setGames] = useState([]);

  async function renderPage(){
    axios.get(`${process.env.NEXT_PUBLIC_HOST}/games`)
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {renderPage()},[])

  return (
    <>
      <Head>
        <title>Gamestore</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logoIcon.svg" />
      </Head>
      <main>
        <Header/>
        <Screen>
        <h1>Home</h1>
        {games.map((g) => 
        <Game 
        key={g.id}
        name={g.name}
        image={g.image}
        consoleId={g.consoleId}
        userId={g.users.id}
        userImg={g.users.image}/>)}
        </Screen>
      </main>
    </>
  )
}


export const Screen = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #1B0166 0%, #08001F 100%);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 64px;
    color: white;
    margin: 10px 50px;

    align-self:flex-start;
  }
`