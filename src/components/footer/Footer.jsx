import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.coluna}>
        <h2>Contatos</h2>
      </div>

      <div className={styles.coluna}>
        <p>(+55) 81 99173-2307</p>
        <p>felipehalk588@gmail.com</p>
      </div>

      <div className={styles.coluna + ' ' + styles.redes}>
        <a href="https://github.com/F5eli8pe8" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/felipe14.3b/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/felipe-souza-8a91a333b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </footer>
  );
}
