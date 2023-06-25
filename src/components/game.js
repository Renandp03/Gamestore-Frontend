import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { TokenContext } from "../../contexts/tokenContext";
import { AlertContext } from "../../contexts/alertContext";
import axios from "axios";
import Link from "next/link";

export default function Game(props){
    const { id, name, image, console, userImg, userId } = props;
    const { favorites, token } = useContext(TokenContext);
   const { alertDisable, setAlertDisable, setMessage } = useContext(AlertContext);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const isLiked = favorites.filter( f => f.gameId == id);
        if(isLiked.length > 0){setLiked(true)}
    }, []);


    function like(){

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios.post(`${process.env.NEXT_PUBLIC_HOST}/favorites/post/${id}`,{},config)
            .then(() => { if(liked){setLiked(false)} else{setLiked(true)}; })
            .catch((err) => {
                if(err.response.data.name == 'unauthorizedError'){
                    setMessage('É preciso fazer login na Gamestore antes de adicionar um jogo a lista de desejos');
                    setAlertDisable(false);
                }
            });

        
    }

    return(
        <GameBody console={console}>
            <Link href={`/game/${id}`}><img src={image} alt={name}/></Link>
            <div>
                <img src={userImg} alt={userId}/>
                {name.length > 8 ? 
                <p>{name.substring(0,8) + '...'}</p> : 
                <p>{name}</p>}
                <img className="like" onClick={like} src={liked ? "../../assets/Heartfull.svg" : "../../assets/Heart.svg"} alt="heart"/>
            </div>
        </GameBody>
    )
}

const GameBody = styled.div`
    width: 218px;
    height: 268px;
    border-radius: 8px;
    background: white;
    margin: 15px;
    box-shadow: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.1));
    transition: all linear .1s;

    *{
        transition: all linear .1s;
    }

    img{
        width: 100%;
        height: 218px;
        border-radius: 8px 8px 0px 0px;
        object-fit:cover;
    }

    div{
        width: 100%;
        height: 50px;
        border-radius: 0px 0px 8px 8px;
        position: relative;
        background: ${
        props => (props.console).includes('Playstation') ? 'linear-gradient(134.59deg, #3565DF 15.4%, #0AB6ED 100%);' :
        (props.console).includes('Xbox') ? 'linear-gradient(134.59deg, #25AE19 15.4%, #22EB2A 100%);' :
        (props.console).includes('Nintendo') ? 'linear-gradient(134.59deg, #F32764 15.4%, #DA0000 100%);' :
        'linear-gradient(135deg, #F3BA27 0%, #FFE500 100%);'
        };

        .like{
            position: absolute;
            left: 178px;
            color: white;
            border: none;
            cursor:pointer;

            &:hover{
                width: 34px;
                height: 34px;
                left: 176px;

            }
        }

        p{
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            color: white;
            position: absolute;
            top:11px;
            left:60px;
        }

        img{
            object-fit:cover;
            width: 30px;
            height: 30px;
            border: 1px solid #fee204;
            border-radius: 30px;
            position: absolute;
            top:10px;
            left:13px;
        }
    }

    &:hover{
        margin: 10px 17px 15px 17px;
    }
`