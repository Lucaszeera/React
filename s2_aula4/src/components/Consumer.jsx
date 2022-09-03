import React from "react"
import { useEffect , useState} from "react"

export default function Consumer(){

    const [repositorio, setRepositorio] = useState()

    useEffect(() =>{
        
        async function carregaRepo(){
            const response = await fetch("https://api.github.com/users")
            const data = await response.json()

            setRepositorio(data)
        } 
        carregaRepo()
    }, [])

    useEffect(() =>{
        document.title = "USE-EFFECTS"

    }, [])

    useEffect(()=>{
        document.title = "Atualizou o titulo"
    }, [repositorio])

    return(
        <div>
            <h1>Lista de usuários do Github</h1>
        </div>
    )
}