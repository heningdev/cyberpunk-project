import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Gangs.css";
import Animals from "../../assets/img/gangs/Animals.png";
import Sixth from "../../assets/img/gangs/Sixth.png";
import Barghest from "../../assets/img/gangs/Barghest.png";
import Maelstrom from "../../assets/img/gangs/Maelstrom.png";
import Moxes from "../../assets/img/gangs/Moxes.png";
import Tyger from "../../assets/img/gangs/Tyger.png";
import Valentinos from "../../assets/img/gangs/Valentinos.png";
import Voodoo from "../../assets/img/gangs/Voodoo.png";

const gangs = [
  {
    img: Barghest,
    name: "Barghest",
    description: "Originalmente uma unidade parte da Militech",
  },
  {
    img: Animals,
    name: "Animals",
    description:
      "Os Animals são um boostergang agressivo de luta de rua do oeste de Pacifica",
  },
  {
    img: Sixth,
    name: "6th",
    description:
      "Fundada por veteranos da quarta Guerra Corporativa cansados ​​da impotência do NCPD",
  },
  {
    img: Maelstrom,
    name: "Maelstrom",
    description:
      "Maelstrom se formou do que sobrou dos Metal Warriors, uma gangue que foi quase completamente exterminada pelos Inquisitors .",
  },
  {
    img: Moxes,
    name: "Moxes",
    description:
      "Os Mox são uma pequena gangue formada por párias de diferentes origens em Night City.",
  },
  {
    img: Tyger,
    name: "Tyger Claws",
    description:
      "Os Tyger Claws são uma gangue territorial implacável baseada em Japantown . Eles são uma das maiores gangues em Night City.",
  },
  {
    img: Valentinos,
    name: "Valentinos",
    description:
      "Durante a década de 2020, os Valentinos eram um posergang dedicado a seduzir as mulheres mais atraentes de Night City.",
  },
  {
    img: Voodoo,
    name: "Voodoo",
    description:
      "Os Voodoo Boys se tornaram uma gangue enigmática de Pacifica , composta por Netrunners dedicados a descobrir os segredos da Old Net e o que estava por trás da Blackwall.",
  },
];

const Gangs = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="gangs" className="gangs">
      <motion.div
        className="gangs-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <h2>Gangues</h2> */}
        <button className="carousel-control left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {gangs.map((gang, index) => (
              <motion.div
                key={index}
                className="gang-card"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={gang.img} alt={gang.name} />
                <h3>{gang.name}</h3>
                <p>{gang.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <button className="carousel-control right" onClick={scrollRight}>
          &#10095;
        </button>
      </motion.div>
    </section>
  );
};

export default Gangs;
