import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "../../contexts/tokenContext";

export default function SignInForm(){
    const { token, setToken, image, setImage } = useContext(TokenContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

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
            router.push('/');
        })
        .catch((error) => console.log(error))
    }

    return(
        <Form onSubmit={login}>
            <h2>Entre na sua conta</h2>
            <input disabled={loading} type="email" required value={email} onChange={e=> setEmail(e.target.value)}  placeholder="email"/>
            <input disabled={loading} type="password" required value={password} onChange={e=> setPassword(e.target.value)} placeholder="senha" />
            
            <button data-text="singup-btn" disabled={loading} type="submit">{loading ? <img src="assets/loading.svg" alt="loading"/> : "Login" }</button>
        </Form>
    )
}

const Form = styled.form`
    width: 357px;
    height: 120%;
    background: #140A2F;
    border-radius:8px;
    padding:40px;
    box-sizing:borde-box;
    margin: 60px;

    display: flex;
    flex-direction:column;

    h2{
        font-size:24px;
        color: white;
        font-weight: 700;
        margin-bottom:30px
    }

    input{
        width: 320px;
        height: 38px;
        background: #FFFFFF;
        border: none;
        box-shadow: 0px 0px 0px 2px #FFEEA9;
        border-radius: 3px;
        margin-bottom:20px;
        padding: 5px;
        box-sizing:border-box;
        font-size: 20px;
        font-weight: 500;
        color:#72667E;
    }

    div{
        display: flex;
        align-items:center;
        justify-content:flex-start;
        width: 277px;

        input{
            width: 120px;
            margin-right: 20px;
        }
    }

    button{
        width: 180px;
        height: 50px;
        background: linear-gradient(359.99deg, #F3BA27 0.01%, #FFE600 99.99%);
        border: none;
        border-radius: 3px;
        color: #774801;
        font-size: 20px;
        font-weight: 500;
        transition: all linear .2s;

        &:hover{
            font-size: 21px;

        }
    }
`