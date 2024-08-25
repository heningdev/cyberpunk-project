import React from "react";
import { motion } from "framer-motion";
import "./Story.css";

const Story = () => {
  return (
    <section id="story" className="story">
      <motion.div
        className="story-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>A História do Cyberpunk</h2>
        <p>
          "Cyberpunk 2077" é um jogo de RPG de mundo aberto desenvolvido pela CD
          Projekt Red, ambientado em um futuro distópico no ano de 2077. A
          história principal do jogo se passa em Night City, uma metrópole
          fictícia localizada no estado livre da Califórnia. A cidade é marcada
          por altos índices de criminalidade, violência, corrupção e pobreza, ao
          mesmo tempo que possui uma abundância de tecnologia avançada e
          cibernética.
        </p>

        <p>
          Você joga como V, um mercenário personalizável que pode ser homem ou
          mulher, com habilidades de hacking, combate, e furtividade. A história
          começa com V aceitando um trabalho perigoso para roubar um biochip
          experimental, conhecido como o Relic, da megacorporação Arasaka. O
          chip tem a capacidade de armazenar a consciência humana e transferi-la
          para outra pessoa. No entanto, durante a missão, as coisas dão
          terrivelmente errado, e V acaba com o biochip implantado em sua
          própria cabeça.
        </p>
      </motion.div>
    </section>
  );
};

export default Story;
