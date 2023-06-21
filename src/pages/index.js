import Head from 'next/head'
import styled from 'styled-components';
import Header from '@/components/header'
import { useState, useEffect, useContext } from 'react';
import { AlertContext } from '../../contexts/alertContext';
import { useRouter } from 'next/router';
import axios from 'axios';
import Game from '@/components/game';
import Alert from '@/components/alert';
import Link from 'next/link';


export default function Home() {

  const [games, setGames] = useState([]);

  async function renderPage(){
    const URL = process.env.NEXT_PUBLIC_HOST
    axios.get(`${URL}/games`,)
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => console.log(err.message));
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
        <Alert/>
        <Header/>
        <Screen>
          <h1>Home</h1>
          <GamesDiv>
          
            {games.map((g) =>
            
              <Game 
                key={g.id}
                id={g.id}
                name={g.name}
                image={g.image}
                consoleId={g.consoleId}
                userId={g.users.id}
                userImg={g.users.image}/>
            )}
          </GamesDiv>
        </Screen>
      </main>
    </>
  )
}


export const Screen = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  height: 100%;
  min-height:100vh;
  background: linear-gradient(180deg, #1B0166 0%, #08001F 100%);
  margin-top: 100px;


  h1{
    font-size: 64px;
    color: white;
    margin: 10px 15px;
    align-self:flex-start;
  }
`

const GamesDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
`