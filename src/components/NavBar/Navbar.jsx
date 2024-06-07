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
  const handelClose=()=>{
    setOpen(false)
  }
  return (
    <>
      <nav className="nav-bar-container ">
        <ul className="container">
          <Link to="/" onClick={handelClose}>
            <li>
              <img src={logo} alt="logo" className="logo" />
            </li>
          </Link>
          <Menu className="menuIcon" onClick={handelToggle}/>
        <div className={open?'menu open':'menu'}>
        <Link to="/apointment"  onClick={handelClose}>
            <li className="center-text">
              MON VÉHICULE EST <span>ENDOMMAGÉE</span>
            </li>
          </Link>
          <Link to="/contact"  onClick={handelClose}> 
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
