import {useState, useEffect} from 'react'
import api from '../../service/api'

export default function Catalogo(){

const [produto, setProduto] = useState([])//Estado para armazenar os produtos
const [err, setErr] = useState(null)

useEffect(()=>{

async function loadCardapio(){
    try{
        const response = await api.get('/api/v1/produtos') //Requisição api
        console.log('Produtos carregado:', response)
    }catch(err){

    }
    
}

loadCardapio()
  
}, [])

    return(
        <div>Cardápio</div>
    )
}