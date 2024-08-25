import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Characters.css";
import Jackie from "../../assets/img/characters/Jackie_Welles.jfif";
import Jhonny from "../../assets/img/characters/Jhonny.jfif";
import V from "../../assets/img/characters/V.jfif";
import Adam from "../../assets/img/characters/Adam_Smasher.png";
import Evelyn from "../../assets/img/characters/Evelyn.png";

const characters = [
  {
    img: Jackie,
    name: "Jackie Welles",
    description:
      "Jackie Welles nasceu em 2047. Quando ele era criança, seu pai ficava bêbado e batia nele e em sua mãe sem piedade com seu cinto, mas quando Jackie ficou forte o suficiente, ele retribuiu o favor e o hospitalizou.",
  },
  {
    img: Jhonny,
    name: "Jhonny Silverhand",
    description:
      "Desde que ele desapareceu, as pessoas choram por Johnny. Há pichações por toda cidade que simplesmente dizem: 'Onde está Johnny?' Mesmo décadas depois, as pessoas mantêm a esperança de que Johnny Silverhand esteja em algum lugar por aí, pronto para levantar o inferno e liderar a revolução.",
  },
  {
    img: V,
    name: "V",
    description:
      "V é um Cyberpunk que tenta fazer um nome em Night City. Aqui, a reputação é o que importa. V perdeu praticamente tudo o que tinha, mas não está sozinho.",
  },
  {
    img: Adam,
    name: "Adam Smasher",
    description:
      "Smasher desapareceu durante o ataque à Torre de Arasaka, embora estivesse vivo. Durante esse tempo, ele foi designado como guarda-costas de Yorinobu Arasaka e encarregado de realizar o trabalho mais sujo de Arasaka",
  },
  {
    img: Evelyn,
    name: "Evelyn Parker",
    description:
      "A inteligência e ambição de Evelyn Parker conduz ela para demandar mais da vida. Seu objetivo de começar sendo uma atriz profissional, sua racionalidade para negócios, levou-a dos Moxes para um trabalho na casa noturna Clouds",
  },
];

const Characters = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="characters" className="characters">
      <motion.div
        className="characters-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <h2>Personagens</h2> */}
        <button className="carousel-control left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {characters.map((character, index) => (
              <motion.div
                key={index}
                className="character-card"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={character.img} alt={character.name} />
                <h3>{character.name}</h3>
                <p>{character.description}</p>
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

export default Characters;
