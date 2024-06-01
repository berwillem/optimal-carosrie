import { Link } from "react-router-dom";
import "./Apointment.css";
const Apointment = () => {
  return (
    <div className="container apointment">
      <h1>
        Je prend rendez vous <br />
        avec mon carrossier:
      </h1>
      <p>
        Pour une bonne prise en charge de votre demande, nous vous prions
        <span>de remplir correctement l’ensemble des éléments demandés</span>
      </p>
      <form>
        <input type="text" placeholder="Nom*" />
        <input type="text" placeholder="Prénom*" />
        <input type="text" placeholder="Courriel*" />
        <input type="text" placeholder="Téléphone*" />

        <input type="text" placeholder="Immatriculation*" />
        <input type="text" placeholder="Votre assurance*" />
        <p>Date de rendez-vous</p>
        <input type="date" />
        <input type="time" />
        <p>La date vous sera confirmées par la carrosserie</p>
        <h2>Photos du véhicule</h2>
        <input type="file" className="file-input" />
        <p id="mention">
          J’ai lu et j’accepte les termes du site div{" "}
          <span>
            <Link to="/legal">Mentions légales</Link>
          </span>
        </p>
        <button>JE PREND UN RENDEZ-VOUS</button>
      </form>
    </div>
  );
};

export default Apointment;
