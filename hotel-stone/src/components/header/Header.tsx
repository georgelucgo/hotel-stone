import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
       <Link className="header-logo" to="/">Hotel Stone</Link>

        <div className="header-nav">
          <Link to="/">HOME</Link>
          <a href="/#sobre">SOBRE</a>
          <a href="/#quartos">QUARTOS</a>
          <a href="/#contato">CONTATO</a>
        </div>
      </div>
    </div>
  );
}

export default Header;