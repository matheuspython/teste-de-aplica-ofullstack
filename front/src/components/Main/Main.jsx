import { useEffect, useState } from "react";
import api from '../../services/api'
import './style.css'

export function Main() {
  const [empregadas, setEmpregradas] = useState([])
  useEffect(() => {
    api.get('/').then(response => {
      setEmpregradas(response.data)
    })
  },[]);

  function chamada({nome}) {
    alert(`dia de trabalho com ${nome} agendado`)
  }

  return (
    <main className="main">
      <div className="container">
        <ul className="lista">
          {empregadas.map(empregada =>(
            <li key={empregada.id}>
              <div>
                <p>nome: {empregada.nome}</p>
                <p>cep: {empregada.cep}</p>
                <p>disponibilidade: {empregada.disponibilidade.map(el => el+' ')}</p>
              </div>
              <button type="button" onClick={()=>chamada(empregada)}>chamar hoje</button>
            </li>))}
        </ul>
        <section className="cadastrar">
            <div className="container">
              <h1>cadastrar-se aqui</h1>
             
             
            </div>
        </section>
      </div>

    </main>
  )
}