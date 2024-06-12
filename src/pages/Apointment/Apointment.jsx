import { Link } from "react-router-dom";
import "./Apointment.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Apointment = () => {
  const [fileName, setFileName] = useState("Aucun fichier sélectionné");
  const [formValues, setFormValues] = useState({
    nom: "",
    prenom: "",
    courriel: "",
    telephone: "",
    immatriculation: "",
    assurance: "",
    date: "",
    heure: "",
  });

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      setFormValues({ ...formValues, photo: event.target.files[0].name });
    } else {
      setFileName("Aucun fichier sélectionné");
      setFormValues({ ...formValues, photo: "Aucun fichier sélectionné" });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_3hk2wmo",
        "template_1b7ad7w",
        formValues,
        "UYlVarH1R1qY_zlE9"
      )
      .then(() => {
        Swal.fire({
          title: "Opération reussie!",
          text: "Votre message a ete envoyer avec succes!",
          icon: "success",
        });
        setFormValues({
          nom: "",
          prenom: "",
          courriel: "",
          telephone: "",
          immatriculation: "",
          assurance: "",
          date: "",
          heure: "",
        });
        () => {
          Swal.fire({
            title: "Échec de l'opération!",
            text: "Une erreur s'est produite. Veuillez réessayer.",
            icon: "error",
          });
        };
      });
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
      <form onSubmit={handleSubmit}>
        <div className="info">
          <input
            type="text"
            name="nom"
            placeholder="Nom*"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom*"
            onChange={handleInputChange}
          />
        </div>
        <div className="info">
          <input
            type="text"
            name="courriel"
            placeholder="Courriel*"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="telephone"
            placeholder="Téléphone*"
            onChange={handleInputChange}
          />
        </div>

        <input
          type="text"
          name="immatriculation"
          placeholder="Immatriculation*"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="assurance"
          placeholder="Votre assurance*"
          onChange={handleInputChange}
        />

        <p className="inputTitre">Date de rendez-vous</p>
        <div className="info">
          <input type="date" name="date" onChange={handleInputChange} />
          <input type="time" name="heure" onChange={handleInputChange} />
        </div>
        <p className="inputTitre">
          La date vous sera confirmées par la carrosserie
        </p>
        <h2 className="SousTitre">Photos du véhicule</h2>

        <div className="file-upload">
          <input
            type="file"
            id="file"
            className="file-input"
            onChange={handleFileChange}
          />
          <label htmlFor="file" className="file-label">
            Sélectionnez un fichier
          </label>
          <p>{fileName}</p>
        </div>
        <p id="mention">
          J’ai lu et j’accepte les termes du site div{" "}
          <span>
            <Link to="/legal">Mentions légales</Link>
          </span>
        </p>
        <div className="btn">
          <button type="submit">JE PREND UN RENDEZ-VOUS</button>
        </div>
      </form>
    </div>
  );
};

export default Apointment;
