import Header from "@/components/header"
import Head from "next/head"
import SignInForm from "@/components/signInForm"
import styled from "styled-components"

export default function SignUp(){
    return(
        <>
        <Head>
          <title>Gamestore</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="assets/logoIcon.svg" />
        </Head>
          <Header/>
          <Screen>
            <SignInForm/>
          </Screen>
          
      
        </>
    )
}

const Screen = styled.div`
  margin-top:150px;
  display: flex;
  flex-direction: column;
  align-items:center;
`