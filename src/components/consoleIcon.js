import styled from "styled-components";

export default function ConsoleIcon(props){
    const {id, name, selectedConsole, setSelectedConsole} = props;

    function select(){
        if(selectedConsole.id == id){
            setSelectedConsole({});

        }
        else{
            setSelectedConsole({id,name});
        }
    }
    return(
    <ConsoleBory onClick={select} selectedConsole={selectedConsole} id={id}>
        <p>{name}</p>
    </ConsoleBory>
    )
}
const ConsoleBory = styled.div`
    width: child;
    min-width: 80px;
    height: 40px;
    border-radius:8px;
    border: 3px solid ${props => props.selectedConsole.id == props.id ? '#FFB800' : 'white'};
    margin: 15px;
    padding: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all linear .2s;

    p{
        font-size: 20px;
        color:  ${props => props.selectedConsole.id == props.id ? '#FFB800' : 'white'};
        display: flex;
        flex-wrap: noWrap;
    }

    &:hover{
            p{color:#FFB800}
    }

   
`