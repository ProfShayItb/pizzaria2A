import { useState, useEffect } from 'react'
import api from '../../service/api'
import 'bootstrap/dist/css/bootstrap.min.css'//importar o CSS do Bootstrap

export default function Catalogo() {

    const [produto, setProduto] = useState([])//Estado para armazenar os produtos
    const [err, setErr] = useState(null)

    useEffect(() => {

        async function loadCardapio() {
            try {
                const response = await api.get('/api/v1/produtos') //Requisição api
                setProduto(response.data)


            } catch (err) {
                setErr('Erro ao carregar os produtos')
                console.log('Erro')

            }

        }

        loadCardapio()

    }, [])

    return (
        <div className='container mt-4'>
            <h1 className='text-center mb 4'>Cardápio</h1>


            <div className='row'>
                {produto.map((item)=>{
                    <div className='col-md-4 mb-4' key={item.id}>
                        <div className='card h-100'>
                            <img src={item.urlFoto}></img>

                            </div>
                        </div>
                })}
            </div>




        </div>
    )
}