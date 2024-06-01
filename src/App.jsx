import mainImage from "./assets/mecanicien-voiture-preparant-aile-voiture-avant-peindre_1.webp";
import "./App.css";
import road from "./assets/road.jpg";
import quality from "./assets/quality.svg";
import handshake from "./assets/handshake.svg";
import ecology from "./assets/ecology.svg";
import money from "./assets/money-transfer.svg";
import newletter from "./assets/newletter.svg";
const App = () => {
  return (
    <>
      <div className="main-container">
        <img src={mainImage} alt="image carrosrie" className="main-image" />
        <div className="container">
          <div className="about">
            <h1 className="titles">Qui sommes nous ?</h1>
            <p>
              <span>
                {" "}
                Notre équipe de professionnels compétents, vous propose un
                accueil personnalisé de qualité, et une totale transparence sur
                les travaux effectués.{" "}
              </span>
              <span>
                La carrosserie se situe dans le 10ème arrondissement de
                Marseille, nous disposons de 420 m2 d’atelier dans lequel nous
                sommes prêts à accueillir votre véhicule. Nous savons que la vie
                sans son véhicule peut être pénible, c’est pourquoi nous nous
                engageons à vous fournir un véhicule de courtoisie le temps des
                travaux.
              </span>
              <span>
                Nous travaillons avec du matériel de pointe, pour vous offrir la
                meilleure prestation possible. La franchise vous est offerte !
              </span>
              <span>Vous pourrez nous joindre au : 06 20 67 53 36</span>
            </p>
          </div>
          <div className="values">
            <h1 className="titles">Nos Valeurs</h1>
            <div className="values-content">
              <img src={road} alt="road" className="road-image" />
              <div className="values-text">
                <div className="value">
                  <img src={quality} alt="quality" />
                  <p>
                    Un travail de <span>Qualité</span>
                  </p>
                </div>
                <div className="value">
                  <img src={handshake} alt="handshake" />
                  <p>Transparence</p>
                </div>
                <div className="value">
                  <img src={money} alt="money" />
                  <p>
                    Franchise <span>Offerte</span>
                  </p>
                </div>
                <div className="value">
                  <img src={ecology} alt="ecology" />
                  <p>
                    Gestion responsable
                    <span>Des déchets</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-letter">
            <img src={newletter} alt="newletter" className="newletter" />
            <input type="text" placeholder="Votre adresse email" />
            <button> S’abonner</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
