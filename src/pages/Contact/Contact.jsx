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
              <p>06 98 43 28</p>
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
              allowfullscreen
              border="none"
              src="https://www.google.com/maps/embed/v1/view?zoom=17&center=43.2773%2C5.4165&key=AIzaSyD3GOujWaSttqYJ6Iiw6L-ZFQfO7YzNpeM"
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <input type="email" placeholder="Votre adresse mail *"/>
          <input type="text" placeholder="Objet :"/>
          <textarea placeholder="Texte :"></textarea>
          <button>Envoyer</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
