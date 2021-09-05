// const titreSpans = document.querySelectorAll('h1 span');
// const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');
// console.log(img1);
// console.log(gsap);
// ANCHOR méthode to()
//depuis l'endroit de mon css jusqu'a ce que j'ai mis dans l'objet gsap
// methode gsap.to permet de faire bouger l'image x horizontal + Nbr px
//la durée d'animation de base est de 0.5 on peut changer celle ci duration:nbr sec, scale pour agrandir l'image concernée
// gsap.to(img1, {x: 100, y: 100, duration: 2, scale: 2}); 
gsap.to('h1', {backgroundColor:'red', duration: 1});

// ANCHOR méthose from()
// gsap.from( 1ere argument ce qu'on souhaite animer, {l'objet d'animation})
// inverse de to(), on part de l'objet entrer en gsap jusqu'a arriver au css 
// gsap.from(img1, {opacity: 0, duration: 4})
// btnCat.addEventListener('click', ()=> {
//     gsap.from(img1, {opacity: 0, duration: 3})
// })

// ANCHOR FROM TO() méthode la moins utilisée
// gsap.fromTo(elementCible, {1er objet de la ou on part TO}, {la ou on va FROM})
// btnCat.addEventListener('click', ()=> {
//     gsap.fromTo(img1, {opacity: 0}, {opacity: 1, duration: 3})
// })

// propriétés repeat et delay ANCHOR
// delay ajoute un délais
// repeatDelay permet d'obtenir un délais entre les répétitions
btnCat.addEventListener('click', ()=> {
    gsap.to(img1, {x: 100, y: 100, duration: 2, scale: 2, delay: 2, repeat: 2, repeatDelay: 1 }); 
})

// ANCHOR easing = la manière dont les animations vont s'executer
// power modifie l'allure (rapide au debut lent a la fin=>power.out  ou inverse power.in, lent au début et à la fin + vitesse normale au milieu => power.inOut)
// gsap.to('.container-images img', { y: 400, duration: 2, scale: 1.2, ease:"power4.out"}); 

// gsap.to('.container-images img', { y: 400, duration: 2, scale: 1.2, ease:"back.out(4)"}); 
// gsap.to('.container-images img', { y: 400, duration: 2, scale: 1.2, ease:"bounce.out"}); 
// gsap.to('.container-images img', { y: 400, duration: 2, scale: 1.2, ease:"elastic.out"}); 
// gsap.to('.container-images img', { y: 400, duration: 2, scale: 1.2, ease:"steps(12)"}); 
// gsap.to('.container-images img', { y: 400, duration: 2, scale: 1.2, ease:"slow"}); 

// propriete stagger ANCHOR permet un décalage
// gsap.to('.container-images img', { y: 400, duration: 2, scale: 1.2, ease:"back.out(4)", stagger: 0.5}); 
// on peu passer des paramètre (ex from: end)
// gsap.to('.container-images img', { y: 400, duration: 2, scale: 1.2, ease:"back.out(4)", stagger: {
//     each: 0.5,
//     // from: 'end'
//     from: 'center'
// }}); 
// possibilité de rendre dynamique en passant une fction
// gsap.to('.container-images img', { y: 100, duration: 2, scale: 1.2, ease:"back.out(4)", stagger: function (index){
//     // console.log(index);
//     return index * 0.5
// }}); 
//duration durée de l'animation, stagger durée entre les animations
gsap.to('.container-btns button', {duration: 0.2, x: 50, stagger: 0.1})

// ANCHOR RANDOM
// ajouter des valeurs de manière aléatoire
// gsap.to('.container-btns button', {duration: 0.2, x: "random(-100,100)", stagger: 0.1})

// ANCHOR keyframes
// gsap.to('.container-images img:nth-child(2)', {keyframes: [
//     {duration: 0.3, y: 100},
//     {duration: 0.3, scale: 1.5},
//     {duration: 0.3, y: 200},
// ]})

// ANCHOR callback
// gsap.to('.container-images img:nth-child(2)', {
//     y:100,
//     onComplete:()=>console.log("Terminée"),
//     onSart:()=>console.log("Démarer"),
//     onUpdate:()=>console.log("Anim en cours"),
//     onRepeat:()=>console.log("Répétition"),
// })

// ANCHOR enregistrer les tweens
// gsap.registerEffect({
//     name: "imgCrazy",
//     effect: (targets, config)=>{
//         return gsap.to(targets, {duration: config.duration, y: 200, scale:1.4, rotation: 360})
//     },
//     defaults: {duration: 2}
// })
// gsap.effects.imgCrazy(img1)


// ANCHOR méthode set()
// peut permettre une mise a zero
// gsap.set(img1, {opacity: 0})

// ANCHOR yoyo
// const anim = gsap.to(img1, {y: 250, yoyo: true, repeat:1})
// anim.delay(1)
// anim.duration(5)
// // anim.seek(2.5)
// anim.resume()

// setTimeout(()=>{
//     anim.restart()
// }, 3000)

// ANCHOR TIMELINES
const img1 = document.querySelector('.container-images img:nth-child(1)');
const img2 = document.querySelector('.container-images img:nth-child(2)');
const img3 = document.querySelector('.container-images img:nth-child(3)');
const title = document.querySelector('.title');
const txt = document.querySelector('.txt');
// Attention dans le CSS mettre opacity: 0 sur les éléments concernés et   transform: translateY(-30px);
// const TL = gsap.timeline();
// TL
// .to(img1, {opacity: 1, y: -0})
// .to(img2, {opacity: 1, y: -0})
// .to(img3, {opacity: 1, y: -0})
// .to(title, {opacity: 1, y:-0})
// .to(txt, {opacity: 1, y:-0})

// ANCHOR paramètre de position
// position absolue
// TL
// .to(img1, {opacity: 1, y: -0, duration: 1})
// .to(img2, {opacity: 1, y: -0, duration: 1})
// .to(img3, {opacity: 1, y: -0, duration: 1,}, 0)
// .to(title, {opacity: 1, y: -0, duration: 1})
// .to(txt, {opacity: 1, y: -0, duration: 1})

// position relative
// TL
// .to(img1, {opacity: 1, y: -0, duration: 1})
// .to(img2, {opacity: 1, y: -0, duration: 1},'-=0.75')
// .to(img3, {opacity: 1, y: -0, duration: 1,},'-=0.75')
// .to(title, {opacity: 1, y: -0, duration: 1},'-=0.75')
// .to(txt, {opacity: 1, y: -0, duration: 1},'-=0.75')

// TL
// .to(img1, {opacity: 1, y: -0, duration: 1})
// .to(img2, {opacity: 1, y: -0, duration: 1},'+=0.75')
// .to(img3, {opacity: 1, y: -0, duration: 1,},'+=0.75')
// .to(title, {opacity: 1, y: -0, duration: 1},'+=0.75')
// .to(txt, {opacity: 1, y: -0, duration: 1},'+=0.75')

// TL
// .to(img1, {opacity: 1, y: -0, duration: 1})
// .to(img2, {opacity: 1, y: -0, duration: 1}, '<') //démarre au début du twin précédent
// .to(img3, {opacity: 1, y: -0, duration: 1}, '>')//démarre a la fin du twin précédent
// .to(title, {opacity: 1, y: -0, duration: 1},'<0.5')//démarre 0.5s après le début du twin précédent
// .to(txt, {opacity: 1, y: -0, duration: 1},'<-0.5')

// ANCHOR paramètre utilitaire de la timeline
// const TL = gsap.timeline({
//     defaults:{
//         duration: 1,
//         ease: "power2"
//     },
//     repeat: -1,
//     repeatDelay: 0.5,
//     yoyo:true,
//     // paused:true va avec setTimeOut
//     // repeat: 2 répete 2X
//     // répétition à l'infini repeat: -1
// });
// TL
// .to(img1, {opacity: 1, y: -0, })
// .to(img2, {opacity: 1, y: -0, ease: "power4" },'-=0.75')
// .to(img3, {opacity: 1, y: -0 },'-=0.75')
// .to(title, {opacity: 1, y: -0 },'-=0.75')
// .to(txt, {opacity: 1, y: -0 },'-=0.75')
// // setTimeout(()=>{
// //     TL.seek(1)
// //     TL.play()
// // }, 1000)

// ANCHOR méthode add et addlabel
const TL = gsap.timeline({
    defaults:{
        duration: 1,
        ease: "power2"
    },
    paused:true

});
TL
.to(img1, {opacity: 1, y: -0, })
.to(img2, {opacity: 1, y: -0,})
.to(img3, {opacity: 1, y: -0 })
.to(title, {opacity: 1, y: -0 })
.addLabel('endAnim')
.to(txt, {opacity: 1, y: -0 })

setTimeout(()=>{
    TL.play('endAnim')
}, 1000)