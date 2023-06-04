import styled from "styled-components";
import { useState, useNavigate, useEffect } from "react";
import axios from "axios";

export default function SignUpForm(){

    const [email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [cep,setCep] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function getAddressByCEP(){
        try {
            if(cep.length == 8) {
                const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                setState(address.uf);
                setCity(address.localidade);
                setStreet(address.logradouro);
            }
        } catch (error) {
            console.log(`Error is: ${error.message}`);
        }
    }

    async function createNewUser(){
        if(password != confirmPassword) return alert('senha não foi confirmada corretamente.');
        try {
            const body = {
                email,
                password,
                name,
                image,
                state,
                city,
                street
            }
            await axios.post(process.env.DATABASE_URL,body);
            navigate('/');
            
        } catch (error) {
            console.log(`Error in create: ${error.response.data.message}`)
        }
    }

    useEffect(()=> {
        getAddressByCEP();
    },[cep]);

    return(
        <Form onSubmit={() => console.log('aqui vai a função')}>
            <h2>Crie sua conta</h2>
            <input disabled={loading} type="email" required value={email} onChange={e=> setEmail(e.target.value)}  placeholder="email"/>
            <input disabled={loading} type="password" required value={password} onChange={e=> setPassword(e.target.value)} placeholder="senha" />
            <input disabled={loading} type="confirm password" required value={password} onChange={e=> setPassword(e.target.value)} placeholder="confirme a senha" />
            <input disabled={loading} type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="nome" required/>
            <input disabled={loading} type="text" value={image} onChange={e=> setImage(e.target.value)}  placeholder="foto" required/>
            <div>
                <input disabled={loading} type="text" value={cep} onChange={e=> setCep(e.target.value)}  placeholder="cep"/>
                <input disabled={loading} type="text" value={state} onChange={e=> setState(e.target.value)}  placeholder="state" required/>
            </div>
            <input disabled={loading} type="text" value={city} onChange={e=> setCity(e.target.value)}  placeholder="city" required/>
            <input disabled={loading} type="text" value={street} onChange={e=> setStreet(e.target.value)}  placeholder="street" required/>
            <button data-text="singup-btn" disabled={loading} type="submit">{loading ? <img src="assets/loading.svg" alt="loading"/> : "Cadastrar" }</button>
        </Form>
    )
}

const Form = styled.form`
    width: 357px;
    height: 510px;
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
        background: #FFBB12;
        border: none;
        border-radius: 3px;
        color: #774801;
        font-size: 20px;
        font-weight: 500;
        transition: all linear .2s;

        &:hover{
            background: #FFB806;
            font-size: 21px;

        }
    }
`