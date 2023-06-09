import styled from "styled-components"
import Head from 'next/head'
import { Screen } from ".."
import Header from "@/components/header"
import { useRouter } from "next/router"

export default function gamePage(){
    const router = useRouter()
    const { id } = router.query;

    return(
        <>
        <Head>
        <title>Gamestore</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../assets/logoIcon.svg" />
        </Head>
        <main>
            <Header/>
            <Screen>
                <h1>Estou na pagina do produto: {id}</h1>
            </Screen>
        </main>
       </>
    )
}
