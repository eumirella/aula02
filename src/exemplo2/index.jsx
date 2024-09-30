import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 
    const buscarUsuario  = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados = await resposta.json();
        setUsuario(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuario</h1>
      <ul>
        {usuario.map(produto => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.userId}</p>
            <p>{produto.completed}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
