import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <motion.div
        className="banner-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Mergulhe no Cyberpunk!</h1>
      </motion.div>
    </section>
  );
};

export default Banner;
