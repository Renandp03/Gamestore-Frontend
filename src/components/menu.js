import { useState } from "react"

export default function Menu(){

    const [clicked,setClicked] = useState(false);
    return(
    <>
        {clicked ? 
        <></> : 
        <>
        <img/>
        </>}
    </>
    )
}