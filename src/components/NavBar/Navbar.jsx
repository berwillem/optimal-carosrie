import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="nav-bar-container ">
        <ul className="container">
          <Link to="/">
            <li>
              <img src={logo} alt="logo" className="logo" />
            </li>
          </Link>
          <Link to="/apointment">
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
