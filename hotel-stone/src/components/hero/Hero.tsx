import heroImg from "/imagens/hero.png";
import './Hero.css'

function Hero() {

  return (
    <>
     <div className="hero">
        <img className="hero-img" src={heroImg} alt="" />
      </div>
    </>
  )
}

export default Hero
