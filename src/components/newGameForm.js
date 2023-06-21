import styled from "styled-components"
import { useState, useEffect, useContext } from "react"
import { Form } from "./signUpForm"
import axios from "axios";
export default function NewGameForm(props){
    const { setGames } = props;
    const [gameName, setGameName] = useState('');

    function searchForGame(event){
        event.preventDefault();
        const URL = process.env.NEXT_PUBLIC_GAMES_URL;
        const KEY = process.env.NEXT_PUBLIC_KEY;
        axios.get(`${URL}/games?key=${KEY}&search=${gameName}&page_size=10&platforms=4,187,18,1,186,7,8,9,14,16,15,17,10`)
        .then((res) => {
            setGames(res.data.results);
        })
        .catch((err) => console.log(err.message))
    }


    return(
    <>
    <Form onSubmit={searchForGame}>
        <h2>Adicione seus Jogos</h2>

        <input type='text' placeholder='Qual é o nome do jogo?' value={gameName} onChange={(e) => setGameName(e.target.value)} />
        <button>procurar</button>

    </Form>

    </>
    )
}
