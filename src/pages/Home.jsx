import React, {useEffect, useState} from 'react'
import './styles.css'

import dashboardProjeto from '../assets/projeto-dashboard.png'
import calcProjeto from '../assets/projeto-calc.png'
import formProjeto from '../assets/projeto-fomr.png'
import qrCodeGenerator from '../assets/qrcode.png'
import alaradoProjeto from '../assets/projeto-alarado.png'
import financas from '../assets/financas.jfif'
import clima from '../assets/clima.png'
// import lua from '../assets/lua.webp'
import dogProjeto from '../assets/projeto-dog.png'
import vitaMedProjeto from '../assets/vitamed-projeto.png'
import logo from '../assets/logo2.png'



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
        revealContent('.fullstack','tight', '90px', '0', '1200'),
        revealContent('.sobre-text','right', '90px', '0', '1400'),

        // Skills
        revealContent('.icons-skill','top', '100px','500','1000'),

        // Cards Projetos
        revealContent('.card','right', '100px', '0', '2000'),

        // Contato
        revealContent('.inputform1','bottom', '100px', '200', '1000'),
        revealContent('.inputform2','bottom', '100px', '400', '1000'),
        revealContent('.inputform3','bottom', '100px', '600', '1000'),
        revealContent('.inputform4','bottom', '100px', '800', '1000'),
        revealContent('.inputform5','bottom', '100px', '1000', '1000'),
        revealContent('.sucesso-form','top', '100px', '0', '1000'),

        // Footer
        revealContent('#footer','top', '100px', '0', '1000')

  }, []);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const [isSending, setIsSending] = useState(false);
  const [showSucessMessage, setShowSucessMessage] = useState(false)
  const [showSErrorMessage, setShowErrorMessage] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true)
    
    try {
      const response = await fetch("/api/index.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: "yuriestudar21@gmail.com", 
          subject: `Mensagem de ${formData.nome} - ${formData.email}`,
          message: formData.mensagem
        })
      });

      if(response.ok){
        setShowSucessMessage(true);
        setShowErrorMessage(false)
        setFormData({ nome: '', email: '', mensagem: '' });
      }else{
        setShowErrorMessage(true)
        setShowSucessMessage(false)
        throw new Error("Falha ao enviar e-mail");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Falha ao enviar. Tente novamente.");
    } finally {
      setIsSending(false)
    }
  };

  return (
    <div>
      <header id='home' className='w-full flex flex-col items-center'>

        <div className='lua-box'>
          <img src={logo} alt="lua" />
        </div>

        <nav className='w-full flex justify-between items-center'>
          
          <div className="logo flex items-center gap-2.5">
            <img className='w-[50px]' src={Logo} alt="logo" />
            <h1 className='font-bold text-2xl'>Yuri</h1>     
          </div>
          <ul className='list-header flex gap-2 text-sm '>
            <li><a className='hover-underline' href="#home">Home</a></li>
            <li><a className='hover-underline' href="#sobre">Sobre</a></li>
            <li><a className='hover-underline' href="#habilidades">Habilidades</a></li>
            <li><a className='hover-underline' href="#projetos">Projetos</a></li>
            <li><a className='hover-underline' href="#contatos">Contatos</a></li>
          </ul>

          <a href="/Curriculo_Yuri_jesus.pdf" download>
            <button  className='button-cv border-white border cursor-pointer text-md font-bold hover:bg-white hover:text-black '>Baixar CV</button>
          </a>
        </nav>
        
        <div className="content-header flex flex-col gap-4 w-full max-w-2xl items-center justify-center text-center">
          <TextEffect text='Yuri'/>
          <p className='sub-text text-3xl'><span className='bg-white text-black font-bold'>Full-Stack</span> Developer</p>

          <a href="/Curriculo_Yuri_jesus.pdf" download>
            <button  className='button-cv border-white border cursor-pointer text-md font-bold hover:bg-white hover:text-black '>Baixar CV</button>
          </a>
        </div>
        
        
      </header>

      <main className='w-full'>

        <section id='sobre' className='sobre w-full'>
            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Sobre mim</h1>
            </div>

            <div className='sobre-content w-full flex items-center justify-center '>

                <div className="text-me w-full">
                    <h1 className='font-bold text-4xl'>Yuri de Jesus</h1>
                    <p className='fullstack text-3xl'><span className='bg-white text-black font-bold'>Full-Stack</span> Developer</p>
                    <p className='sobre-text'>
                    Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em me tornar um desenvolvedor cada vez mais completo e preparado para os desafios do mercado.
                    Tenho facilidade para aprender novas tecnologias, resolver problemas e trabalhar em equipe, sempre buscando entregar soluções funcionais e com uma boa experiência para o usuário.
                    Me destaco pela dedicação, proatividade e vontade constante de evoluir. Acredito que tecnologia vai muito além do código — é sobre entender o problema, colaborar com o time e construir algo que realmente faça a diferença.</p>
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
                <CardProjetos link="https://controle-de-financas-yuurij.netlify.app/dashboard" title="Controle de Finaças" img={financas} p="Dashboard de Controle Financeiro, uma aplicação web que permite organizar receitas e despesas de forma simples e intuitiva."/>
                <CardProjetos link="https://weather-web-git-main-yuurij-devs-projects.vercel.app/" title="Previsão de Clima" img={clima} p="Previsão de Clima um projeto com foco em integração de APIs e boas práticas de desenvolvimento front-end. A aplicação consome dados da API OpenWeatherMap e exibe a previsão do tempo de forma clara e responsiva."/>
                <CardProjetos link="https://gerenciador-de-produtos-lime.vercel.app/" title="Gerenciador de Produtos" img={dashboardProjeto} p="Front-End completo de um sistema completo com cadastro de produtos e usuários, controle de estoque, edição e remoção de itens. Possui dashboard com gráficos de vendas e frequência de usuários."/>
                <CardProjetos link="https://qr-code-generator-mu-two.vercel.app/" title="Gerador de QR Code" img={qrCodeGenerator} p="Um gerador de QR Code simples, rápido e intuitivo, desenvolvido com HTML, CSS e JavaScript. Permite criar QR Codes personalizados a partir de qualquer texto ou link, com visualização em tempo real e opção de download da imagem. Ideal para facilitar o compartilhamento de informações de forma prática e acessível."/>
                <CardProjetos link="https://alarado-home-page.vercel.app/" title="Alarado Home Page" img={alaradoProjeto} p="Landing page moderna com design responsivo, foco em UI/UX e layout clean, ideal para apresentar produtos ou serviços de forma clara e atrativa."/>
                <CardProjetos link="https://age-calculator-bice-seven.vercel.app/" title="Calculadora de Idade" img={calcProjeto} p="Aplicação com layout moderno e responsivo, que calcula a idade exata em anos, meses e dias a partir da data de nascimento. Interface clean, com foco na experiência do usuário."/>
                <CardProjetos link="https://form-community-of-developers.vercel.app/" title="Community of Developers" img={formProjeto} p="Formulário com design moderno e responsivo, onde o usuário seleciona sua stack, nível de experiência e revisa todas as informações antes de enviar. Possui validação robusta e feedbacks visuais que garantem uma ótima experiência de uso."/>
                <CardProjetos link="https://meu-pet-tau.vercel.app/" title="Landing Page para Clínica Veterinária" img={dogProjeto} p="Projeto freelance de uma landing page responsiva, com foco em apresentar os serviços da clínica e facilitar o contato com os clientes. Layout limpo, moderno e otimizado para conversão."/>
                <CardProjetos link="https://vita-med.vercel.app/" title="Landing Page para Clínica Médica Vita Med" img={vitaMedProjeto} p="Projeto freelance de uma landing page responsiva, desenvolvida para apresentar os serviços da clínica, transmitir confiança e facilitar o agendamento. Design moderno, seções bem estruturadas e foco na experiência do usuário."/>

            </div>
        </section>

        <section id='contatos' className='w-full'>
            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Fala <span className='text-black bg-white'>Comigo</span></h1>
            </div>
            
            
            <form onSubmit={handleSubmit} method="POST" className='formulario w-full flex gap-2.5 flex-col items-center justify-center'>

              {showSucessMessage && (
                <div className='sucesso-form max-w-[500px] w-full h-[50px] flex items-center  border-l-8 rounded border-green-400 bg-green-200 px-4'>
                  <span className='text-black font-bold'>E-mail enviado com sucesso!</span>
                </div>
              )}

              {showSErrorMessage && (
                <div className='erro-form max-w-[500px] w-full h-[50px] flex items-center  border-l-8 rounded border-red-400 bg-red-200 px-4'>
                  <span className='text-black font-bold'>Erro ao enviar E-mail!</span>
                </div>
              )}

              <input className='inputform1 w-full max-w-[500px]' name='nome' value={formData.nome} onChange={handleChange} type="text" required placeholder='Nome'/>
              <input className='inputform2 w-full max-w-[500px]' name="email" value={formData.email} onChange={handleChange} type="email" required placeholder='Email'/>
              <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} className='inputform4 w-full max-w-[500px] area resize-none' required rows="4" placeholder='Sua Mensagem'/>

              <button type='submit' disabled={isSending} className='inputform5 buttonForm w-full max-w-[200px] bg-white text-black font-bold text-2xl cursor-pointer'>
                {isSending ? 'Enviando...' : 'Enviar'}
              </button>

            </form>
        </section>

        
      </main>
      <footer id='footer' className='w-full border-t border-t-neutral-800 flex items-center justify-center flex-col gap-2.5'>
          <div className='personal-info-footer'>
              <ul className="social-links flex gap-2.5 text-5xl">
                <li>
                  <a href="https://github.com/Yuurij-dev" target="_blank" rel="noopener noreferrer"  className="transition-all duration-300 hover:text-6xl">
                    <i className="text-[50px] fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/yuri-de-jesus-431275212/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-6xl">
                    <i className="text-[50px] fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/yjg.dev" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-6xl">
                    <i className="text-[50px] fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
          </div> 
          <h1 className='text-2xl'>Social Links</h1>
      </footer>
    </div>
  )
}

export default Home