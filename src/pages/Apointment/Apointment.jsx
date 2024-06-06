import { Link } from "react-router-dom";
import "./Apointment.css";
import { useState } from "react";
const Apointment = () => {
  const [fileName, setFileName] = useState("Aucun fichier sélectionné");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("Aucun fichier sélectionné");
    }
  };
  return (
    <div className="container apointment">
      <h1>
        Je prend rendez vous <br />
        avec mon carrossier:
      </h1>
      <p className="titre">
        Pour une bonne prise en charge de votre demande, nous vous prions
        <span>de remplir correctement l’ensemble des éléments demandés</span>
      </p>
      <form>
       <div className="info">
       <input type="text" placeholder="Nom*" />
        <input type="text" placeholder="Prénom*" />
       </div>
        <div className="info">
        <input type="text" placeholder="Courriel*" />
        <input type="text" placeholder="Téléphone*" />
        </div>
        
        <input type="text" placeholder="Immatriculation*" />
        <input type="text" placeholder="Votre assurance*" />
       
        <p className="inputTitre">Date de rendez-vous</p>
     <div className="info">
     <input type="date" />
        <input type="time" />
     </div>
        <p className="inputTitre">La date vous sera confirmées par la carrosserie</p>
        <h2 className="SousTitre">Photos du véhicule</h2>
     
        
       <div className="file-upload">
       <input type="file" id="file" className="file-input"  onChange={handleFileChange}  />
      <label htmlFor="file" className="file-label">Sélectionnez un fichier</label>
      <p> {fileName}</p>
       </div>
        <p id="mention">
          J’ai lu et j’accepte les termes du site div{" "}
          <span>
            <Link to="/legal">Mentions légales</Link>
          </span>
        </p>
       <div className="btn"> <button>JE PREND UN RENDEZ-VOUS</button></div>
      </form>
    </div>
  );
};

export default Apointment;
