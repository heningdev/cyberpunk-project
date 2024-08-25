import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ScrollNavigation.css";

const ScrollNavigation = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (index) => {
    const targetSection = document.getElementById(sections[index].id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setActiveSection(index);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 0;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  return (
    <div className="scroll-navigation">
      <div className="scroll-points">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`scroll-point ${
              index === activeSection ? "active" : ""
            }`}
            whileHover={{ scale: 1.2, backgroundColor: "#ff66cc" }}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollNavigation;
