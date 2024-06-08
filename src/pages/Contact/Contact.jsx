import "./Contact.css";
import { Home, Smartphone, Mail, Instagram } from "lucide-react";
const Contact = () => {
  return (
    <>
      <div className="container contact-container">
        <h1 className="contact-header">Nous Contacter :</h1>
        <div className="contact-infos">
          <div className="contact-text">
            <h1>contact</h1>
            <div className="contact-info">
              <Home />
              <p>
                26 rue Francois Mauriac <br /> 13010 Marseille
              </p>
            </div>
            <div className="contact-info">
              <Smartphone />
              <p>+33 6 98 43 28 19</p>
            </div>
            <div className="contact-info">
              <Mail />
              <p>19 optimalecarrosserie@gmail.com</p>
            </div>
            <div className="contact-info">
              <Instagram />
              <p> optimale_carrosserie</p>
            </div>
          </div>
          <div className="contact-localisation">
            <iframe
              width="550"
              height="350"
              border="none"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?q=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FOptimale%2BCarrosserie%2F%4043.2772505%2C5.4159027%2C17z%2Fdata%3D!3m1!4b1!4m6!3m5!1s0x12c9b934f1988087%3A0x50df5bc91d3012a7!8m2!3d43.2772505!4d5.4159027!16s%252Fg%252F11p_5t3nkw%3Fentry%3Dttu&key=AIzaSyD3GOujWaSttqYJ6Iiw6L-ZFQfO7YzNpeM"
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <input type="email" placeholder="Votre adresse mail *" />
          <input type="text" placeholder="Objet :" />
          <textarea placeholder="Texte :"></textarea>
          <button>Envoyer</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
