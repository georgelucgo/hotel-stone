import "./Card.css";

interface CardProps {
  hrefImg: string;
  nome: string;
  descricao: string;
}

function Card({ hrefImg, nome, descricao,  }: CardProps) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img src={hrefImg} alt="" />
          <div className="card-text">
          <h3>{nome}</h3>
          <p>{descricao}</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Card;
