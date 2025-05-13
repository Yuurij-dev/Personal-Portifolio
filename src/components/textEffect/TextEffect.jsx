import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './style.css';

const TextEffect = ({ text = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('.letter');

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Animação de entrada (subindo e aparecendo)
    tl.fromTo(
      letters,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
      }
    );

    // Pausa um pouquinho e começa a sair
    tl.to(
      letters,
      {
        opacity: 0,
        y: -100,
        stagger: 0.1,
        duration: 0.3,
        ease: 'power2.in',
      },
      '+=1' // espera 1 segundo antes de começar a desaparecer
    );
  }, []);

  return (
    <div ref={textRef} className="text">
      {text.split('').map((char, index) => (
        <span key={index} className="letter text-9xl">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default TextEffect;
