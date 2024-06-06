import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Menu } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handelToggle=()=>{
    setOpen(!open)
  }
  return (
    <>
      <nav className="nav-bar-container ">
        <ul className="container">
          <Link to="/">
            <li>
              <img src={logo} alt="logo" className="logo" />
            </li>
          </Link>
          <Menu className="menuIcon" onClick={handelToggle}/>
        <div className={open?'menu open':'menu'}>
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
        </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
