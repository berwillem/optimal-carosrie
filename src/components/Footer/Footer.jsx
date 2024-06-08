import "./Footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="container footer">
          <img src={logo} alt="logo" className="logo" />
          <div className="footer-infos">
            <div className="contact-footer">
              <h2>Contact</h2>
              <p>
                26 rue Francois Mauriac <br />
                13010 Marseille
              </p>
              <p>+33 6 98 43 28 19</p>
              <p>optimalecarrosserie@gmail.com</p>
            </div>
            <div className="horaires-footer">
              <h2>Horaires</h2>
              <p>
                De lundi à jeudi <br />
                8h00-12h et 14h-18h30
              </p>
              <p>
                Vendredi <br /> 8h00-12h et 14h-18H00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
