'use client'

import dynamic from 'next/dynamic'
import Style from './SobreMim.module.css'
import { FaDownload, FaEnvelope } from 'react-icons/fa'
import { Raleway } from 'next/font/google'
import { useEffect, useState } from 'react'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500' , '700']
})

// Importa o componente com SSR desabilitado (Fazendo isso, o componente só será renderizado no cliente)
// Isso é necessário porque o react-typewriter-effect não funciona corretamente com SSR
const TypeWriterEffect = dynamic(() => import('react-typewriter-effect'), {
  ssr: false
})


//Para propositos de estudo irei anotar como fazer o a forma que fiz a animação de digitação de texto igual a da lib
//so que forma manual!
export default function SobreMim() {
  
  // Definindo o nome completo que será exibido
  const fullName = 'Valdenilson Felipe'
  
  //  Cria um estado para armazenar o texto visível na tela (vai sendo preenchido aos poucos)
  const [displayText, setDisplayText] = useState("")
  
  // useEffect roda uma única vez quando o componente é montado (por causa do [])
  //Oque o useEffect faz é criar um intervalo que adiciona uma letra do nome completo ao texto visível a cada 100ms
  useEffect(() => {
    //Começa com o índice 0, que representa a primeira letra do nome completo
    let currentIndex = 0;
    
    //Cria um intervalo que vai rodar a cada 100ms
    const interval = setInterval(() => {
     //verifica se tem mais letras para adicionar ao texto visível
      if (currentIndex < fullName.length) {
        const nextChar = fullName[currentIndex]; //pega a próxima letra do nome completo
        setDisplayText((prev) => prev + nextChar); //adiciona a letra ao texto visível
        currentIndex++; //incrementa o índice para a próxima letra
      } else {
        clearInterval(interval); //se não tem mais letras para adicionar, limpa o intervalo
      }
    }, 100); //100ms de intervalo entre cada letra
    
    return () => clearInterval(interval); // Função de limpeza para garantir que o intervalo seja cancelado ao desmontar o componente

  }, []);

  return (
    <div className={Style.containerPrincipalSobreMim}>

      <div>
        <div className={`${Style.containerFoto} ${Style.fadeIn} ${Style.fadeInDelay1}`}>
          <img src="/images/fotoSobreMim/MinhaFt2.jpg" alt="Eu" />
        </div>
      </div>

      <div className={Style.containerTexto}>
        
        <div className={Style.containerNome}>
          <p className={Style.NomeEstilo}>
            {displayText}
            {displayText.length < fullName.length && <span className={Style.caret}>|</span>}
          </p>
        </div>

        <div className={Style.containerFuncao}>
        <TypeWriterEffect
            textStyle={{
              fontFamily: 'raleway',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'white',
              textAlign: 'center'
            }}
            startDelay={2000}
            cursorColor="white"
            text="Frontend Developer"
            typeSpeed={100}
            hideCursorAfterText={true}
          />        </div>

        <div className={`${Style.containerDescricao} ${raleway.className} ${Style.fadeIn} ${Style.fadeInDelay2}`}> 
          <p>
          Olá, Meu nome é Felipe e sou programador Front-end cursando atualmente Análise e Desenvolvimento de Sistemas na rede de ensino superior Uninter através do programa do governo ProUni. 
              <br />
              <br />
          Consigo me comunicar com facilidade e tenho habilidades com organização para projetos e interação em equipe, 
          estou interessado em continuar aprendendo sempre novas tecnologias para melhorar meu desempenho e aprimorar as habilidades
           que eu já tenho. Eu começei através da programação de jogos, e depois meus estudos me levaram ao desenvolvimento de sistemas, onde eu tive meu primeiro contato realizando cursos online da instituição de ensino “Cod3r”.
          </p>
        </div>

        <div className={` ${Style.containerBotao} ${raleway.className} ${Style.fadeIn} ${Style.fadeInDelay3}`}>
              <a href="/Currículo-Valdenilson Felipe.pdf" download className={Style.Botao} >
            <span className={Style.Icon}><FaDownload/></span>CURRÍCULO
              </a>
        
          <a    
              href="https://wa.me/5581991732307?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato!"
              target="_blank"
              rel="noopener noreferrer"
              className={Style.Botao}>
            <span className={Style.Icon}><FaEnvelope /></span>CONTATO
          </a>
        </div>

      </div>
    </div>
  )
}
