window.onbeforeunload = function(){
  window.scrollTo(0, 0);
}


// NAV HAMBURGER \\
const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__div2');

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// Swipper \\
let swiper1 = new Swiper(".mySwiper1", {
    cssMode: true,
    mousewheel: true,
    keyboard: true,
  });

const btnNext = document.querySelector(".swiper-next-custom");
const btnPrev = document.querySelector(".swiper-prev-custom");
if(btnNext && btnPrev) {
  btnNext.addEventListener("click", ()=>{
    swiper1.slideNext();
  })
  btnPrev.addEventListener("click", ()=>{
    swiper1.slidePrev();
  })
}


// INTERSECTION OBSERVER \\
let div2h2 = document.querySelector('.div2__h2');
let div2pictures = document.querySelector('.div2__pictures');
let div22h2 = document.querySelector('.div22__h2');
let div22pictures = document.querySelector('.div22__pictures');
let div3h2 = document.querySelector('.div3__h2');
let div3textimg = document.querySelector('.div3__textimg');
let div4h2 = document.querySelector('.div4__h2');
let div5h2 = document.querySelector('.div5__h2');
let div6h2 = document.querySelector('.div6__h2');
let div7part1img = document.querySelector('.div7__part1img');
let div7part2 = document.querySelector('.div7__part2');
let div7part3 = document.querySelector('.div7__part3');
let div7part4 = document.querySelector('.div7__part4');

const observer = new IntersectionObserver(function (entries){
  entries.forEach(function (entry){
      entry.target.classList.toggle('show', entry.isIntersecting);              // show in css
      if (entry.isIntersecting) observer.unobserve(entry.target);               // Pojave se samo prvi put
  });
}, {
  threshold: 0.5,                                                               // default: 0 , recommended: 0.5
  // rootmargin: "100px",                                                       // Ucitava slike 100px pre nego dodjemo do njih
});

observer.observe(div2h2);
observer.observe(div2pictures);
observer.observe(div22h2);
observer.observe(div22pictures);
observer.observe(div3h2);
observer.observe(div3textimg);
observer.observe(div4h2);
observer.observe(div5h2);
observer.observe(div6h2);
observer.observe(div7part1img);
observer.observe(div7part2);
observer.observe(div7part3);
observer.observe(div7part4);