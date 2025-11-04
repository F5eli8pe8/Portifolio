
import Style from './Skills.module.css'



export default function Skills() {
    return (
        <div className={Style.containerPrincipalHabilidades}>
            
            <div className={Style.containerTexto}>
                <h1>Habilidades</h1>
                <p>Aqui algumas das ferramentas e tecnologias que eu tenho conhecimento!</p>
            </div>

            <div className={Style.containerCard}>
                
                
                <div className={Style.card}>
                    <img src="/images/Habilidades/jsLogo.png" alt="Js" />
                    <p>JavaScript</p>
                </div>

                <div className={Style.card}>
                    <img src="/images/Habilidades/NextLogo.png" alt="NEXT" />
                    <p>Next.js</p>
                </div>

                <div className={Style.card}>
                    <img src="/images/Habilidades/ReactLogo.png" alt="React" />
                    <p>React</p>
                </div>

                <div className={Style.card}>
                    <img src="/images/Habilidades/HtmlLogo.png" alt="HTML" />
                    <p>HTML</p>
                </div>
                
                <div className={Style.card}>
                    <img src="/images/Habilidades/TypeLogo.png" alt="TypeScript" />
                    <p>TypeScript</p>
                </div>



            </div>
            <div className={Style.containerCard}>
                
                <div className={Style.card}>
                    <img src="/images/Habilidades/cssLogo.png" alt="CSS" />
                    <p>CSS</p>
                </div>

                <div className={Style.card}>
                    <img src="/images/Habilidades/GitLogo.png" alt="GIT" />
                    <p>Git</p>
                </div>
                
                <div className={Style.card}>
                    <img src="/images/Habilidades/GitHubLogo.png" alt="GitHub" />
                    <p>GitHub</p>
                </div>
                
                <div className={Style.card}>
                    <img src="/images/Habilidades/PythonLogo.png" alt="Python" />
                    <p>Python</p>
                </div>
                
                <div className={Style.card}>
                    <img src="/images/Habilidades/DjangoLogo.png" alt="Django" />
                    <p>Django</p>
                </div>


            </div>
        </div>
    )
}