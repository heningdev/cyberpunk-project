import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import Logo from "./logo.png";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Navbar = ({ onToggleMute, isMuted }) => {
  return (
    <header>
      <nav className="navbar">
        <img src={Logo} alt="Cyberpunk Logo" className="logo" />
        <button className="mute-button" onClick={onToggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
