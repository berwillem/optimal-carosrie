import "./App.css";
import video from "./assets/video.mp4";
import previewImage from "./assets/videopreview.webp";
import road from "./assets/road.webp";
import money from "./assets/pic1.webp";
import quality from "./assets/pic2.webp";
import handshake from "./assets/pic3.webp";
import ecology from "./assets/pic4.webp";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState();
  const [isVisible2, setIsVisible2] = useState();
  const [isVisible3, setIsVisible3] = useState();
  const [isVisible4, setIsVisible4] = useState();
  const [isVisible5, setIsVisible5] = useState();
  const elementRef = useRef();
  const myref = useRef();
  const myref2 = useRef();
  const myref3 = useRef();
  const myref4 = useRef();


  useEffect(() => {
    const observer = new IntersectionObserver(
      ((enties) => {
    const entry=enties[0]

    setIsVisible(entry.isIntersecting)

      }),
  
    );
    const observer2 = new IntersectionObserver(
      ((enties) => {
    const entry=enties[0]

    setIsVisible2(entry.isIntersecting)

      }),
  
    );
    const observer3 = new IntersectionObserver(
      ((enties) => {
    const entry=enties[0]

    setIsVisible3(entry.isIntersecting)

      }),
  
    );
    const observer4 = new IntersectionObserver(
      ((enties) => {
    const entry=enties[0]

    setIsVisible4(entry.isIntersecting)

      }),
  
    );
    const observer5= new IntersectionObserver(
      ((enties) => {
    const entry=enties[0]

    setIsVisible5(entry.isIntersecting)

      }),
  
    );
  observer.observe(elementRef.current)
  observer2.observe(myref.current)
  observer3.observe(myref2.current)
  observer4.observe(myref3.current)
  observer5.observe(myref4.current)
   
  }, []);
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
            <h1  className={`titles ${isVisible ? 'show' : 'hidden'}`} ref={elementRef}>Qui sommes nous ?</h1>
            <p>
              <span ref={myref} className={` ${isVisible2 ? 'show' : 'hidden'}`}>
                {" "}
                Notre équipe de professionnels compétents, vous propose un
                accueil personnalisé de qualité, et une totale transparence sur
                les travaux effectués.{" "}
              </span>
              <span ref={myref2} className={` ${isVisible3 ? 'show' : 'hidden'}`}>
                La carrosserie se situe dans le 10ème arrondissement de
                Marseille, nous disposons de 420 m2 d’atelier dans lequel nous
                sommes prêts à accueillir votre véhicule. Nous savons que la vie
                sans son véhicule peut être pénible, c’est pourquoi nous nous
                engageons à vous fournir un véhicule de courtoisie le temps des
                travaux.
              </span>
              <span ref={myref3} className={` ${isVisible4 ? 'show' : 'hidden'}`}>
                Nous travaillons avec du matériel de pointe, pour vous offrir la
                meilleure prestation possible. La franchise vous est offerte !
              </span>
              <span ref={myref4} className={` ${isVisible5 ? 'show' : 'hidden'}`}>Vous pourrez nous joindre au : 06 20 67 53 36</span>
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
