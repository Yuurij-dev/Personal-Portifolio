import React, {useEffect, useState} from 'react'
import './styles.css'

import dashboardProjeto from '../assets/projeto-dashboard.png'
import calcProjeto from '../assets/projeto-calc.png'
import formProjeto from '../assets/projeto-fomr.png'
import Logo from '../assets/logo2.png'

import { TextEffect, IconSkill, CardProjetos} from '../components/index'

import { revealContent } from '../config/scrollRevealConfig';

 
function Home() {
    useEffect(() => {
        // Header
        revealContent('.text','left', '90px', '0', '1000'),
        revealContent('.sub-text','right', '90px', '500', '1000'),
        revealContent('.title','bottom', '90px', '0', '2000'),

        // Sobre
        revealContent('.text-me h1','right', '90px', '0', '1000'),
        revealContent('.text-me span','right', '90px', '500', '1000'),
        revealContent('.text-me .p-1','right', '90px', '700', '1000'),
        revealContent('.text-me .p-2','right', '90px', '900', '1000'),
        revealContent('.text-me .p-3','right', '90px', '1100', '1000'),
        revealContent('.text-me .social-links','right', '90px', '1300', '1000'),
        revealContent('.img-me-box','left', '90px', '0', '1000'),

        // Skills
        revealContent('.icons-skill','top', '100px','500','1000'),

        // Cards Projetos
        revealContent('.card','right', '100px', '0', '2000'),

        // Contato
        revealContent('.inputform1','bottom', '100px', '200', '1000'),
        revealContent('.inputform2','bottom', '100px', '400', '1000'),
        revealContent('.inputform3','bottom', '100px', '600', '1000'),
        revealContent('.inputform4','bottom', '100px', '800', '1000'),
        revealContent('.inputform5','bottom', '100px', '1000', '1000')

  }, []);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: "yuriestudar21@gmail.com", // pode ser fixo ou vindo do form
          subject: `Mensagem de ${formData.nome} - ${formData.email}`,
          message: formData.mensagem
        })
      });

      const text = await response.text();
      alert(text);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Falha ao enviar. Tente novamente.");
    }
  };

  return (
    <div>
      <header id='home' className='w-full flex flex-col items-center'>

        <nav className='w-full flex justify-between items-center'>
          
          <div className="logo flex items-center gap-2.5">
            <img className='w-[50px]' src={Logo} alt="logo" />
            <h1 className='font-bold text-2xl'>Yuri</h1>     
          </div>
          <ul className='list-header flex gap-2 text-sm '>
            <li><a className='hover-underline' href="#home">Hoasdasdme</a></li>
            <li><a className='hover-underline' href="#sobre">Sobre</a></li>
            <li><a className='hover-underline' href="#habilidades">Habilidades</a></li>
            <li><a className='hover-underline' href="#projetos">Projetos</a></li>
            <li><a className='hover-underline' href="#contatos">Contatos</a></li>
          </ul>

          <button className='border-white border cursor-pointer text-md hover:bg-white hover:text-black '>Baixar CV</button>
        </nav>
        
        <div className="content-header flex flex-col w-full max-w-2xl items-center justify-center text-center">
          <TextEffect text='Yuri'/>
          <p className='sub-text text-3xl'>Entregando Soluções Frontend Personalizadas <span className='bg-white text-black'>que se Destacam.</span></p>
          
        </div>
        
        
      </header>

      <main className='w-full'>

        <section id='sobre' className='sobre w-full'>
            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Sobre mim</h1>
            </div>

            <div className='sobre-content w-full flex gap-8 '>
                {/* <div className="img-me-box w-1/2 bg-red-300 flex items-center justify-center rounded overflow-hidden">
                  <img src={MePhoto} alt="" className="w-full h-full object-cover" />
                </div> */}

                <div className="img-me-box w-1/2 h-[700px] bg-red-300 ">

                </div>

                <div className="text-me w-1/2">
                    <h1 className='font-bold text-4xl'>Yuri</h1>
                    <span className='bg-white text-black text-3xl'>Front-End Developer</span>
                    <p className='p-1'>
                        Sou um desenvolvedor Front-End apaixonado por criar interfaces intuitivas, modernas e acessíveis. 
                        Atualmente estou cursando Análise e Desenvolvimento de Sistemas e busco constantemente 
                        evoluir tanto tecnicamente quanto como profissional.      
                    </p>
                    <br />
                    <p className='p-2'>
                      Tenho experiência com tecnologias como HTML, CSS, JavaScript e React, e estou sempre explorando 
                        novas ferramentas e práticas para entregar projetos eficientes e com ótima usabilidade. 
                        Acredito que o design aliado a um bom código transforma ideias em experiências reais.
                    </p>
                    <br />
                    <p className='p-3'>
                      Estou pronto para contribuir com soluções criativas, trabalhar em equipe e aprender algo novo todos os dias.
                    </p>

                    <ul className="social-links flex gap-2.5 text-5xl">
                      <li>
                        <a href="#" className="transition-all duration-300 hover:text-6xl">
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="transition-all duration-300 hover:text-6xl">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="transition-all duration-300 hover:text-6xl">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                </div>
            </div>
        </section>

        <section id='habilidades' className='skill'>

            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Skills</h1>
            </div>

            <div className='box-icons-skill w-full flex flex-wrap gap-5 justify-center'>
                <IconSkill typeIcon="html" content="devicon-html5-plain colored"/>
                <IconSkill typeIcon="css" content="devicon-css3-plain colored" />
                <IconSkill typeIcon="js" content="devicon-javascript-plain colored" />
                <IconSkill typeIcon="ts" content="devicon-typescript-plain colored" />
                <IconSkill typeIcon="react" content="devicon-react-original colored" />
                <IconSkill typeIcon="tailwind" content="devicon-tailwindcss-original colored" />
                <IconSkill typeIcon="node" content="devicon-nodejs-plain-wordmark colored" />
                <IconSkill typeIcon="php" content="devicon-php-plain colored" />
                <IconSkill typeIcon="python" content="devicon-python-plain colored" />
                <IconSkill typeIcon="mysql" content="devicon-mysql-plain-wordmark colored" />
                <IconSkill typeIcon="postgress" content="devicon-postgresql-plain colored" />
                <IconSkill typeIcon="figma" content="devicon-figma-plain colored" />
                <IconSkill typeIcon="git" content="devicon-git-plain colored" />
                <IconSkill typeIcon="git-hub" content="devicon-github-original" />
            </div>
            
        </section>

        <section id='projetos' className='w-full'>
            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Projetos</h1>
            </div>

            <div className='grid-projetos w-full grid grid-cols-3 gap-8 justify-items-center '>
                <CardProjetos link="https://gerenciador-de-produtos-lime.vercel.app/" title="Gerenciador de Produtos" img={dashboardProjeto} p="Front-End completo de um sistema completo com cadastro de produtos e usuários, controle de estoque, edição e remoção de itens. Possui dashboard com gráficos de vendas e frequência de usuários."/>
                <CardProjetos link="https://age-calculator-bice-seven.vercel.app/" title="Calculadora de Idade" img={calcProjeto} p="Aplicação com layout moderno e responsivo, que calcula a idade exata em anos, meses e dias a partir da data de nascimento. Interface clean, com foco na experiência do usuário."/>
                <CardProjetos link="https://form-community-of-developers.vercel.app/" title="Community of Developers" img={formProjeto} p="Formulário com design moderno e responsivo, onde o usuário seleciona sua stack, nível de experiência e revisa todas as informações antes de enviar. Possui validação robusta e feedbacks visuais que garantem uma ótima experiência de uso."/>

            </div>
        </section>

        <section id='contatos' className='w-full'>
            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Fala <span className='text-black bg-white'>Comigo</span></h1>
            </div>

            <form onSubmit={handleSubmit} method="POST" className='formulario w-full flex gap-2.5 flex-col items-center justify-center'>
                <input className='inputform1 w-full max-w-[500px]' name='nome' value={formData.nome} onChange={handleChange} type="text" required placeholder='Nome'/>
                <input className='inputform2 w-full max-w-[500px]' name="email" value={formData.email} onChange={handleChange} type="email" required placeholder='Email'/>
                {/* <input className='inputform3 w-full max-w-[500px]' name='phone'  type="text"  placeholder='Telefone'/> */}
                <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} className='inputform4 w-full max-w-[500px] area resize-none' required type="text" rows="4" placeholder='Sua Mensagem'/>               

                <button type='submit' className='inputform5 buttonForm w-full max-w-[200px] bg-white text-black font-bold text-2xl cursor-pointer'>Enviar</button>
                
            </form>
        </section>

        
      </main>
      <footer className='w-full max-w-[] border-t border-t-white flex flex-wrap gap-5 justify-between'>
          <div className='personal-info-footer'>
              <div className=" max-w-[300px]">

                <div className='logo-footer flex items-center gap-2.5'>
                  <img className='w-[50px]' src={Logo} alt="logo" />
                  <h1 className='font-bold text-2xl'>Yuri</h1>  
                </div> 

                <span>Entregando Soluções Frontend Personalizadas que se Destacam.</span>
              </div>

              <ul className="social-links flex gap-2.5 text-5xl">
                <li>
                  <a href="#" className="transition-all duration-300 hover:text-6xl">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-all duration-300 hover:text-6xl">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-all duration-300 hover:text-6xl">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
          </div>
          
          <div>
            <h1 className='font-bold text-2xl '>Skill</h1>
            <ul className='list-disc'>
              <li><span className='hover-underline cursor-default'>React JS</span></li>
              <li><span className="hover-underline cursor-default">Node JS</span></li>
              <li><span className="hover-underline cursor-default">JavaScript</span></li>
              <li><span className="hover-underline cursor-default">TypeScript</span></li>
              <li><span className="hover-underline cursor-default">TailWind CSS</span></li>
            </ul>
          </div>

          <div>
            <h1 className='font-bold text-2xl '>Tecnologias</h1>
            <ul className='list-disc '>
              <li><span className="hover-underline cursor-default">GIT</span></li>
              <li><span className="hover-underline cursor-default">GitHub</span></li>
              <li><span className="hover-underline cursor-default">Postgress</span></li>
              <li><span className="hover-underline cursor-default">Figma</span></li>
            </ul>
          </div>

          <div>
            <h1 className='font-bold text-2xl'>Menu</h1>
            <ul className='list-disc '>
              <li><a href='#home' className="hover-underline cursor-pointer">Home</a></li>
              <li><a href='#sobre' className="hover-underline cursor-pointer">Sobre</a></li>
              <li><a href='#habilidades' className="hover-underline cursor-pointer">Habilidades</a></li>
              <li><a href='#projetos' className="hover-underline cursor-pointer">Projetos</a></li>
              <li><a href='#contatos' className="hover-underline cursor-pointer">Contatos</a></li>
            </ul>
          </div>
      </footer>
    </div>
  )
}

export default Home