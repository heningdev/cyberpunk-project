import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Weapons.css";
import Katana from "../../assets/img/katana.jpg";
import Rifle from "../../assets/img/Rifle.jpg";
import Implants from "../../assets/img/Implants.jpg";

const weapons = [
  {
    img: Katana,
    name: "Katana de Energia",
    description:
      "Uma espada mortal que pode cortar através da maioria dos materiais...",
  },
  {
    img: Katana,
    name: "Katana de Energia",
    description:
      "Uma espada mortal que pode cortar através da maioria dos materiais...",
  },
  {
    img: Katana,
    name: "Katana de Energia",
    description:
      "Uma espada mortal que pode cortar através da maioria dos materiais...",
  },
  {
    img: Rifle,
    name: "Rifle de Plasma",
    description:
      "Dispara rajadas de plasma, perfeito para eliminar inimigos à distância...",
  },
  {
    img: Implants,
    name: "Implantes Cibernéticos",
    description:
      "Aprimore suas habilidades com implantes que aumentam sua força...",
  },
];

const Weapons = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="weapons" className="weapons">
      <motion.div
        className="weapons-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <h2>Armas e Equipamentos</h2> */}
        <div className="carousel">
          <button className="carousel-control left" onClick={scrollLeft}>
            &#10094;
          </button>
          <div className="carousel-container">
            <div className="carousel" ref={carouselRef}>
              {weapons.map((weapon, index) => (
                <motion.div
                  key={index}
                  className="weapon-card"
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={weapon.img} alt={weapon.name} />
                  <h3>{weapon.name}</h3>
                  <p>{weapon.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <button className="carousel-control right" onClick={scrollRight}>
          &#10095;
        </button>
      </motion.div>
    </section>
  );
};

export default Weapons;
