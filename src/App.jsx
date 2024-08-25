import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Story from "./components/Story/Story";
import Characters from "./components/Characters/Characters";
import World from "./components/World/World";
import Weapons from "./components/Weapons/Weapons";
import ScrollNavigation from "./components/ScrollNavigation/ScrollNavigation";
import ParallaxDivider from "./components/Divider/Divider";
import { motion } from "framer-motion";
import { Howl } from "howler";
import BackgroundSound from "./assets/sounds/background.mp3";
import Enter from "./assets/sounds/enter.wav";
import Gangs from "./components/Gangs/Gangs";

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [backgroundSound, setBackgroundSound] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sound = new Howl({
      src: [BackgroundSound],
      loop: true,
      volume: isMuted ? 0 : 0.3,
    });

    setBackgroundSound(sound);
    sound.play();

    return () => {
      sound.stop();
    };
  }, []);

  useEffect(() => {
    if (backgroundSound) {
      backgroundSound.volume(isMuted ? 0 : 0.5);
    }
  }, [isMuted, backgroundSound]);

  const playTransitionSound = () => {
    const transitionSound = new Howl({
      src: [Enter],
      volume: 0.4,
    });
    transitionSound.play();
  };

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const sections = [
    { id: "banner", text: "Bem-vindo ao mundo Cyberpunk" },
    { id: "story", text: "Conheça os personagens mais icónicos" },
    { id: "characters", text: "Explore um mundo distópico" },
    { id: "world", text: "Varias gangues e desafios" },
    { id: "gangs", text: "Diversas armas e estilos de combate" },
    { id: "weapons", text: "Cyberpunk 2077" },
  ];

  return (
    <div className="App">
      {isMobile ? (
        <div className="mobile-message">
          <p>Visualização indisponível para mobile.</p>
        </div>
      ) : (
        <>
          <Navbar onToggleMute={toggleMute} isMuted={isMuted} />
          <ScrollNavigation sections={sections} />
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <motion.div
                id={section.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                onAnimationStart={playTransitionSound}
              >
                {section.id === "banner" && <Banner />}
                {section.id === "story" && <Story />}
                {section.id === "characters" && <Characters />}
                {section.id === "world" && <World />}
                {section.id === "weapons" && <Weapons />}
                {section.id === "gangs" && <Gangs />}
              </motion.div>
              <ParallaxDivider text={section.text} />
            </React.Fragment>
          ))}
          <footer>
            <p>&copy; 2024 hng.dev Todos os direitos reservados.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
