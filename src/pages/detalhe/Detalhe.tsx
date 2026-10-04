import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './Detalhe.css'

interface Quarto {
  id: number;
  nome: string;
  hrefImg: string;
  descricao: string;
}

function DetalhesQuarto() {
  const { id } = useParams<{ id: string }>();

  const [quarto, setQuarto] = useState<Quarto | null>(null);

  useEffect(() => {
    async function buscarQuarto() {
      try {
        const response = await fetch("/quartos.json");

        if (!response.ok) {
          throw new Error("Erro ao buscar quartos");
        }

        const data: Quarto[] = await response.json();

        const encontrado = data.find(
          (item) => item.id === Number(id)
        );

        setQuarto(encontrado ?? null);
      } catch (error) {
        console.error(error);
      } 
    }

    buscarQuarto();
  }, [id]);


  if (!quarto) return <h2>Quarto não encontrado</h2>;

  return (
    <div className="detalhes-quarto">
      <img src={quarto.hrefImg} alt={quarto.nome} />
      <h1>{quarto.nome}</h1>
      <p>{quarto.descricao}</p>
    </div>
  );
}

export default DetalhesQuarto;