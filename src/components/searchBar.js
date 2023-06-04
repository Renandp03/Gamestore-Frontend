import styled from 'styled-components'

export default function SearchBar(){
    return(
    <>
        <Bar/>
    </>
    )
}

const Bar = styled.input`
    width: 175px;
    height: 30px;
    border:none;
    border-radius:4px;
    background-color: white;
    
    
`
const But = styled.div`
    width: 105px;
    height: 20px;
`