import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header({ scrollToSection, sobreRef, habilidadesRef, projetosRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (ref) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Navegação</div>

      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
        <button onClick={() => handleClick(sobreRef)}>Sobre mim</button>
        <button onClick={() => handleClick(habilidadesRef)}>Habilidades</button>
        <button onClick={() => handleClick(projetosRef)}>Projetos</button>
      </nav>
    </header>
  );
}
