import ScrollReveal from 'scrollreveal';

const revelar = ScrollReveal({ reset: true });


export const revealContent = (target, origin, distance, delay, duration,) => 
    revelar.reveal(target, {
        origin: origin,
        distance: distance,
        duration: duration,
        delay: delay
    });

export default revelar;
