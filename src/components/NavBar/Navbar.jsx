import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav-bar-container ">
        <ul className="container">
          <Link to="/">
            <li>LOGO</li>
          </Link>
          <Link to="/">
            <li className="center-text">
              MON VÉHICULE EST <span>ENDOMMAGÉE</span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="center-text">
              JE CONTACTE <span> L’ATELIER</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
