import mainImage from "./assets/main-image.jpg";
import "./App.css";
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
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
