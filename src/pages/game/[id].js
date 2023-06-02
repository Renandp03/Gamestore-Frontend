import { useRouter } from "next/router"

export default function game(){
    const router = useRouter()
    const { id } = router.query

    return(
        <h1>Estou na pagina do produto: {id}</h1>
    )
}