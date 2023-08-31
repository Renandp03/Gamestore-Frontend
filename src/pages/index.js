import Head from 'next/head'
import styled from 'styled-components';
import Header from '@/components/header'
import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../contexts/tokenContext';
import axios from 'axios';
import Game from '@/components/game';
import Alert from '@/components/alert';
import Notifications from '@/components/notifications';


export default function Home() {

  const [games, setGames] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const {setToken, userId,setUserId, setFavorites } = useContext(TokenContext);
  const URL = process.env.NEXT_PUBLIC_HOST

  async function renderPage(){
    
    const tokenIndex = JSON.parse(localStorage.getItem("token"));
    setToken(JSON.parse(localStorage.getItem("token")));
    const userId = JSON.parse(localStorage.getItem("userId"));
    setUserId(JSON.parse(localStorage.getItem("userId")));

    
      axios.get(`${URL}/games`,)
        .then((res) => {
          setGames(res.data);
        })
        .catch((err) => console.log(err.message));
    if(tokenIndex !== ''){
      const config = {
        headers: {
            Authorization: `Bearer ${tokenIndex}`,
        }
      };
      axios.get(`${URL}/favorites/${userId}`,config)
              .then((response) => {
                localStorage.setItem('favorites',JSON.stringify(response.data));
                setFavorites(response.data);
              })
              .catch((err) =>{console.log(err)});

      axios.get(`${URL}/notifications`,config)
              .then((res) => setNotifications(res.data))
              .catch((err)=> console.log(err.message));
    }
  }

  useEffect(() => {renderPage()},[userId])

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
          <h1 className='title'>Jogos em alta:</h1>
          <DivFlex>
          <GamesDiv>
          
            {games.map((g) =>
            
              <Game 
                key={g.id}
                id={g.id}
                name={g.name}
                image={g.image}
                platform={g.platform.name}
                userId={g.owner.id}
                userImg={g.owner.image}/>
            )}
          </GamesDiv>
          <><Notifications notifications={notifications}/></>
          </DivFlex>
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
  padding-bottom: 60px;

  .title{
    color: white;
    font-size: 36px;
    margin: 10px 10%;
    align-self: flex-start;
  }

  
`

const GamesDiv = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 800px;
  height: 100%;
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  
`

const DivFlex = styled.div`
  display: flex;
`