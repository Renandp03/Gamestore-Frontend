import Head from 'next/head'
import styled from 'styled-components';
import Header from '@/components/header'
import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../contexts/tokenContext';
import axios from 'axios';
import Game from '@/components/game';
import Alert from '@/components/alert';


export default function Home() {

  const [games, setGames] = useState([]);
  const { token, setToken, setUserId, setFavorites } = useContext(TokenContext);

  async function renderPage(){
    
    const tokenIndex = JSON.parse(localStorage.getItem("token"));
    setToken(JSON.parse(localStorage.getItem("token")));
    const userId = JSON.parse(localStorage.getItem("userId"));
    setUserId(JSON.parse(localStorage.getItem("userId")));

    const URL = process.env.NEXT_PUBLIC_HOST
      axios.get(`${URL}/games`,)
        .then((res) => {
          setGames(res.data);
        })
        .catch((err) => console.log(err.message));
    if(tokenIndex){
      const config = {
        headers: {
            Authorization: `Bearer ${tokenIndex}`,
        }
      };
      axios.get(`${URL}/favorites/get/${userId}`,config)
              .then((response) => {
                localStorage.setItem('favorites',JSON.stringify(response.data));
                setFavorites(response.data);
              })
              .catch((err) =>{ 
                if(err.response.data.name == 'notFound'){
                    console.log('Nenhum favorites encontrado');
                }});
    }
    
  }

  useEffect(() => {renderPage()},[token])

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
          <GamesDiv>
          
            {games.map((g) =>
            
              <Game 
                key={g.id}
                id={g.id}
                name={g.name}
                image={g.image}
                console={g.consoles.name}
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