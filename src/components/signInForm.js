import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "../../contexts/tokenContext";
import { Form } from "./signUpForm";

export default function SignInForm(){
    const {setToken, setImage, setUserId} = useContext(TokenContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading] = useState(false);

    const router = useRouter();

    async function login(event){
        event.preventDefault();
        const URL = process.env.NEXT_PUBLIC_HOST
        const body = {
            email,
            password
        };

        await axios.post(`${URL}/signIn`,body)
        .then((res) => {
            setToken(res.data.token);
            localStorage.setItem('token',JSON.stringify(res.data.token));
            setImage(res.data.image);
            localStorage.setItem('image',JSON.stringify(res.data.image));
            setUserId(res.data.userId);
            localStorage.setItem('userId',JSON.stringify(res.data.userId));
            router.push('/');
        })
        .catch((error) => console.log(error));
    }

    return(
        <Screen>
            <Form onSubmit={login}>
                <h2>Entre na sua conta</h2>
                <input disabled={loading} type="email" required value={email} onChange={e=> setEmail(e.target.value)}  placeholder="email"/>
                <input disabled={loading} type="password" required value={password} onChange={e=> setPassword(e.target.value)} placeholder="senha" />
                
                <button disabled={loading} type="submit">{loading ? <img src="assets/loading.svg" alt="loading"/> : "Login" }</button>
            </Form>
        </Screen>
    )
}

const Screen = styled.div`
    width: 100%;
    height: 100%;
    min-height:100vh;
    display: flex;
    align-items:center;
    justify-content:center;
`