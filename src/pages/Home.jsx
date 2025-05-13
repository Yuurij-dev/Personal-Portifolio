import React, {useEffect} from 'react'
import './styles.css'

import dashboardProjeto from '../assets/projeto-dashboard.png'
import calcProjeto from '../assets/projeto-calc.png'
import formProjeto from '../assets/projeto-fomr.png'

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
        revealContent('.text-me p','right', '90px', '1000', '1000'),
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
  return (
    <div>
      <header className='w-full flex flex-col items-center'>

        <nav className='w-full flex justify-between items-center'>
          <div className="">
            <h1 className='font-bold text-md'>Yuri</h1>
            
          </div>
          <ul className='flex gap-2 text-sm '>
            <li><a className='hover-underline' href="#">Home</a></li>
            <li><a className='hover-underline' href="#">Sobre</a></li>
            <li><a className='hover-underline' href="#">Habilidades</a></li>
            <li><a className='hover-underline' href="#">Projetos</a></li>
            <li><a className='hover-underline' href="#">Contatos</a></li>
          </ul>
          <button className='border-white border cursor-pointer text-md hover:bg-white hover:text-black '>Baixar CV</button>
        </nav>
        
        <div className="content-header flex flex-col w-full max-w-2xl items-center justify-center text-center">
          <TextEffect text='Yuri'/>
          <p className='sub-text text-3xl'>Entregando Soluções Frontend Personalizadas <span className='bg-white text-black'>que se Destacam.</span></p>
          
        </div>

        
      </header>

      <main className='w-full'>

        <section className='sobre w-full'>
            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Sobre mim</h1>
            </div>

            <div className='w-full flex '>
                <div className="img-me-box w-1/2">
                    <div className="img-me">

                    </div>
                </div>
                <div className="text-me w-1/2">
                    <h1 className='font-bold text-4xl'>Yuri</h1>
                    <span className='bg-white text-black text-3xl'>Front-End Developer</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero voluptatibus vel odit
                        iure ex tempora beatae! Ipsam, non. Molestiae consequatur dicta quisquam dolorem numquam quas repudiandae consequuntur ab sit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero voluptatibus vel odit
                        iure ex tempora beatae! Ipsam, non. Molestiae consequatur dicta quisquam dolorem numquam quas repudiandae consequuntur ab sit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero voluptatibus vel odit
                        <br />
                        <br />
                        iure ex tempora beatae! Ipsam, non. Molestiae consequatur dicta quisquam dolorem numquam quas repudiandae consequuntur ab sit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero voluptatibus vel odit
                        iure ex tempora beatae! Ipsam, non. Molestiae consequatur dicta quisquam dolorem numquam quas repudiandae consequuntur ab sit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero voluptatibus vel odit
                        iure ex tempora beatae! Ipsam, non. Molestiae consequatur dicta quisquam dolorem numquam quas repudiandae consequuntur ab sit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero voluptatibus vel odit
                        <br />
                        <br />
                        iure ex tempora beatae! Ipsam, non. Molestiae consequatur dicta quisquam dolorem numquam quas repudiandae consequuntur ab sit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero voluptatibus vel odit
                        iure ex tempora beatae! Ipsam, non. Molestiae consequatur dicta quisquam dolorem numquam quas repudiandae consequuntur ab sit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero voluptatibus vel odit
                        iure ex tempora beatae! Ipsam, non. Molestiae consequatur dicta quisquam dolorem numquam quas repudiandae consequuntur ab sit?
                        
                    </p>
                </div>
            </div>
        </section>

        <section className='skill'>

            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Skills</h1>
            </div>

            <div className='box-icons-skill w-full flex flex-wrap gap-5 content-center-center'>
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

        <section className='w-full'>
            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Projetos</h1>
            </div>

            <div className='grid-projetos w-full grid grid-cols-3 gap-8 justify-items-center '>
                <CardProjetos title="Projeto 1" img={dashboardProjeto} p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla it, sed efficitur nunc tincidunt eget. Lorem ipsum dolor sit amet, consec"/>
                <CardProjetos title="Projeto 2" img={calcProjeto} p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla it, sed efficitur nunc tincidunt eget. Lorem ipsum dolor sit amet, consec"/>
                <CardProjetos title="Projeto 3" img={formProjeto} p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla it, sed efficitur nunc tincidunt eget. Lorem ipsum dolor sit amet, consec"/>
                <CardProjetos title="Projeto 1" img={dashboardProjeto} p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla it, sed efficitur nunc tincidunt eget. Lorem ipsum dolor sit amet, consec"/>
                <CardProjetos title="Projeto 2" img={calcProjeto} p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla it, sed efficitur nunc tincidunt eget. Lorem ipsum dolor sit amet, consec"/>
                <CardProjetos title="Projeto 3" img={formProjeto} p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla it, sed efficitur nunc tincidunt eget. Lorem ipsum dolor sit amet, consec"/>

            </div>
        </section>

        <section className='w-full'>
            <div className="title text-center">
                <h1 className='text-5xl font-bold'>Fala <span className='text-black bg-white'>Comigo</span></h1>
            </div>

            <form className='formulario w-full flex gap-2.5 flex-col items-center justify-center'>
                <input className='inputform1 w-full max-w-[500px]' type="text" placeholder='Nome'/>
                <input className='inputform2 w-full max-w-[500px]' type="text" placeholder='Email'/>
                <input className='inputform3 w-full max-w-[500px]' type="text" placeholder='Telefone'/>
                <textarea className='inputform4 w-full max-w-[500px] area resize-none' type="text" rows="4" placeholder='Sua Mensagem'/>

                <button className='inputform5 w-full max-w-[200px] bg-white text-black font-bold text-2xl'>Enviar</button>
            </form>
        </section>

        <footer>
            meu footer
        </footer>
      </main>
    </div>
  )
}

export default Home