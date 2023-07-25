import styled from "styled-components"

export default function UserGame(props){

    const { id ,name, image, selectedGame, setSelectedGame } = props;

    return(
        <GameStyled
        onClick={() => {setSelectedGame(id)}}
        id={id}
        selectedGame={selectedGame}
        src={image} 
        alt={name}/>
    )
}

const GameStyled = styled.img`
    width: 150px;
    height: 150px;
    border: ${props => props.selectedGame == props.id ? '3px solid yellow' : 'none'};
    border-radius: 8px;
    margin: 15px;
    object-fit:cover;

    transition: all linear .1s;

    
    &:hover{
        width: 155px;
        height: 155px;
        margin: 10px 17.5px 20px 17.5px;

    }
`