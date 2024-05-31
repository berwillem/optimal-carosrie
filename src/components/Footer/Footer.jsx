import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="container footer">
          <h2>Logo</h2>
          <div className="contact-footer">
            <h2>Contact</h2>
            <p>26 rue Francois Mauriac 13010 Marseille</p>
            <p>06 20 67 53 36</p>
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
    </>
  );
};

export default Footer;
