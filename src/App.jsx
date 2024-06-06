import "./App.css";
import video from "./assets/video.mp4";
import previewImage from "./assets/videopreview.webp";
import road from "./assets/road.webp";
import money from "./assets/pic1.webp";
import quality from "./assets/pic2.webp";
import handshake from "./assets/pic3.webp";
import ecology from "./assets/pic4.webp";

const App = () => {
  return (
    <>
      <div className="main-container">
        <video
          className="main-video"
          poster={previewImage}
          autoPlay
          preload="auto"
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>

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
              <img  src={road} alt="road" className="road-image" />
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
        </div>
      </div>
    </>
  );
};

export default App;
