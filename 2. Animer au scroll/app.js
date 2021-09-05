// 
gsap.to('.b2 h2', {
    duration: 1,
    y: 0,
    scale: 2,
    autoAlpha:1,
    scrollTrigger:{//attention utilisation du cdn pour le scrollTrigger
        trigger:".b2 h2",
        markers: true,
        start:"top center",
        end: "bottom top" //top pour trigger
    }
})