import Style from './Projetos.module.css';
import React, { useState } from 'react';

const projetos = [
  {
    titulo: "Meus-Favoritos",
    imagem: "/images/Projetos/MeusFav.png",
    github: "https://github.com/F5eli8pe8/Meus-Favoritos",
    deploy: "https://meus-favoritos.vercel.app"
  },
  {
    titulo: "Carrinho de compras",
    imagem: "/images/Projetos/CarrinhoComp.png",
    github: "https://github.com/F5eli8pe8/Carrinho-de-compras",
    deploy: "https://carrinho-de-compras-bay-zeta.vercel.app"
  },
  {
    titulo: "Representa",
    imagem: "/images/Projetos/Representa.png",
    github: "https://github.com/F5eli8pe8/Representa",
    deploy: "https://representa.vercel.app"
  },
  {
    titulo: "Calculadora",
    imagem: "/images/Projetos/Calculadora.png",
    github: "https://github.com/F5eli8pe8/Calculadora",
    deploy: "https://calculadora-fawn.vercel.app"
  },
  {
    titulo: "tela de inicio: EasyStay",
    imagem: "/images/Projetos/EasyStayFoto.png",
    github: "https://github.com/F5eli8pe8/Tela_Inicial_EasyStay",
    deploy: "https://tela-inicial-easy-stay.vercel.app"

  },
];

export default function Projetos() {
  const [indexAtual, setIndexAtual] = useState(0);
  const quantidadeVisivel = 3;

  const proximo = () => {
    setIndexAtual((prev) => (prev + 1) % projetos.length);
  };

  const anterior = () => {
    setIndexAtual((prev) => (prev - 1 + projetos.length) % projetos.length);
  };

  // Gera a lista circular dos projetos visíveis
  const projetosVisiveis = Array.from({ length: quantidadeVisivel }, (_, i) => {
    return projetos[(indexAtual + i) % projetos.length];
  });

  return (
    <div className={Style.containerPrincipal}>
      <div className={Style.containerTexto}>
        <h1>Projetos</h1>
        <p>Aqui estão alguns dos projetos que desenvolvi!</p>
      </div>

      <div className={Style.carouselWrapper}>
        <button className={Style.seta} onClick={anterior}>←</button>
        
        <div className={Style.cardsContainer}>
          {projetosVisiveis.map((projeto, index) => (
            <div key={index} className={Style.card}>
              <div className={Style.imageWrapper}>
                <img src={projeto.imagem} alt={projeto.titulo} className={Style.imagem} />
                <a href={projeto.deploy} target="_blank" rel="noopener noreferrer" className={Style.iconLink}>🔗</a>
              </div>
              <h2 className={Style.titulo}>{projeto.titulo}</h2>
              <div className={Style.botoes}>
                <a href={projeto.github} target="_blank" rel="noopener noreferrer" className={Style.btnRepositório}>Repositório</a>
                <a href={projeto.deploy} target="_blank" rel="noopener noreferrer" className={Style.btnDeploy}>Deploy</a>
              </div>
            </div>
          ))}
        </div>

        <button className={Style.seta} onClick={proximo}>→</button>
      </div>
    </div>
  );
}
