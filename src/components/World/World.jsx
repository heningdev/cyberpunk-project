import React from "react";
import { motion } from "framer-motion";
import "./World.css";
import Neon from "../../assets/img/Neon.jpg";
import Desert from "../../assets/img/Desert.jpg";
import Urban from "../../assets/img/Urban.jpg";

const World = () => {
  return (
    <section id="world" className="world">
      <motion.div
        className="world-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <h2>O Mundo de Cyberpunk</h2> */}
        <div className="world-grid">
          <motion.div
            className="world-card"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <img src={Neon} alt="Local 1" />
            <h3>Bairro de Neon</h3>
            <p>
              Um lugar vibrante, cheio de luzes de neon, onde as corporações
              dominam e o perigo espreita em cada esquina.
            </p>
          </motion.div>
          <motion.div
            className="world-card"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <img src={Desert} alt="Local 2" />
            <h3>Terras Desoladas</h3>
            <p>
              Um deserto devastado pela guerra, onde sobreviventes lutam pelo
              controle dos últimos recursos.
            </p>
          </motion.div>
          <motion.div
            className="world-card"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <img src={Urban} alt="Local 3" />
            <h3>Submundo Urbano</h3>
            <p>
              Um labirinto de ruas escuras e perigosas, lar de hackers, gangues
              e rebeldes.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default World;
