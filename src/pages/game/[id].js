import styled from "styled-components"
import Head from 'next/head'
import { Screen } from ".."
import Header from "@/components/header"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import GamePerfil from "@/components/gamePerfil"

export default function gamePage(){
    const router = useRouter()
    const { id } = router.query;
    const [ gameInfo, setGameInfo ] = useState({});


    function getGameInfo(){
        if(!id) return undefined;
        const URL = process.env.NEXT_PUBLIC_HOST;
        axios.get(`${URL}/games/${id}`)
        .then((res) => {
            setGameInfo(res.data);
        
        })
        .catch((err) => {console.log(err)})
    }


    useEffect(() => {getGameInfo()},[id])

    const {name, image, owner, platform} = gameInfo;

    return(
        <>
        <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../assets/logoIcon.svg" />
        </Head>
        <main>
            <Header/>
            <Screen>
                <GameSpace>
                    <GamePerfil name={name} image={image} platform={platform}/>
                    <GameInfo>
                        <p>Nome: <span>{name}</span></p>
                        <p>Console: <span>{platform}</span></p>
                        <p>Proprietario: <span>{owner}</span></p>
                    </GameInfo>
                </GameSpace>
            </Screen>
        </main>
       </>
    )
}

const GameSpace = styled.div`
    display: flex;
    padding: 30px 0px;
    align-items: flex-start;
`

const GameInfo = styled.div`
    color: white;

    p{
        font-size: 18px;
        font-weight: 500;
        margin: 10px 20px;
    }
    span{
        font-size: 16px;
        font-weight: 400;
    }
`