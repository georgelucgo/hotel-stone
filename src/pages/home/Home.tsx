import "./Home.css";

import sobreImg from "/imagens/sobre.jpg";

import Card from "../../components/card/Card";
import Hero from "../../components/hero/Hero";
import Container from "../../components/container/Container";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Quarto {
  id: number;
  nome: string;
  hrefImg: string;
  descricao: string;
}

function Home() {
  const [quartos, setQuartos] = useState<Quarto[]>([]);

  useEffect(() => {
    async function buscarQuartos() {
      try {
        const response = await fetch("/quartos.json");

        if (!response.ok) {
          throw new Error("Erro ao buscar quartos");
        }

        const data: Quarto[] = await response.json();

        setQuartos(data);
      } catch (error) {
        console.error(error);
      }
    }

    buscarQuartos();
  }, []);

  return (
    <>
      <Hero />

      <Container>
        <div className="sobre" id="sobre">
          <div className="sobre-title">
            <span>Sobre nós</span>
          </div>

          <div className="sobre-content">
            <div className="sobre-text">
              <h2>Hotel Stone — Um refúgio nas montanhas</h2>

              <br />
              <br />

              <p>
                Bem-vindo ao Hotel Stone, um lugar criado para quem busca
                conforto, tranquilidade e uma experiência inesquecível em meio
                às montanhas. Com uma arquitetura inspirada nos tradicionais
                chalés alpinos, o hotel combina madeira, pedra e iluminação
                aconchegante, criando um ambiente acolhedor e sofisticado.
                Nossos quartos foram cuidadosamente preparados para proporcionar
                noites de descanso e momentos especiais. Desfrute de uma vista
                privilegiada das montanhas, ambientes confortáveis e toda a
                tranquilidade que você precisa para fugir da rotina.
              </p>
            </div>

            <img
              className="sobre-img"
              src={sobreImg}
              alt="Hotel Stone"
            />
          </div>
        </div>

        <div className="quartos" id="quartos">
          <div className="quartos-title">
            <h2>Conheça nossas opções</h2>
          </div>

          <div className="quartos-content">
            {quartos.map((quarto) => (
              <Link
                key={quarto.id}
                to={`/quartos/${quarto.id}`}
                className="quarto-link"
              >
                <Card
                  hrefImg={quarto.hrefImg}
                  nome={quarto.nome}
                  descricao={quarto.descricao}
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;