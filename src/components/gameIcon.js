import styled from "styled-components"

export default function GameIcon(props){
    const {id, name, image, selectedGame, setSelectedGame, consoles, setConsoles } = props;

    function select(){
        if(selectedGame.id == id){
            setSelectedGame({});
            setConsoles([]);

        }
        else{
            setSelectedGame({id,name,image});
            setConsoles(consoles)
        }
    }
    return(
        <GameBody onClick={select} selected={selectedGame} id={id}>
            <img src={image} alt={name}/>
            <p>{name}</p>
        </GameBody>
    )
}

const GameBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 5px;
    cursor: pointer;
    

    img{
        width: 150px;
        height: 150px;
        border-radius: 8px;
        object-fit:cover;
        border: ${props => props.selected.id == props.id ? '3px solid #fee204' : 'none'};
        
    }

    p{
        width: 100px;
        display: flex;
        flex-wrap:wrap;
        color:  ${props => props.selected.id == props.id ? '#fee204' : 'white'};
        font-weight: 500;
        margin: 5px 0px;
    }
`