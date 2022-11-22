// gsap.from(".header", {duration: 1, y: "-100%", ease: "bounce"})
// gsap.from(".link", {duration: 1, opacity: 0, delay: 1, stagger: .5})
// gsap.from(".right",{duration:2, x: '-100vw', delay: 1, ease: "power2.in"})
// gsap.from(".left", {duration:3, x: "-100%", delay: 2, ease: "power2.out", ease: "bounce"})
// gsap.to(".footer", {duration:1, y: 0, ease: "elastic", delay:3})
// gsap.to(".button", { delay: 2.5, rotation:360 });

const timeline = gsap.timeline({defaults: {duration:1}})
timeline.from(".header",{y: "-100%", ease: "bounce"}) 
.from(".link", {opacity: 0, stagger: .5})
.from(".right",{ x: '-100vw', ease: "power2.in"})
.from(".left", { x: "-100%", ease: "power2.out", ease: "bounce"})
.to(".footer", { y: 0, ease: "elastic"})
.from(".button", {  rotation:360 })


const button = document.querySelector('.button')
button.addEventListener('click', () => {
    timeline.reverse()
})