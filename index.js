

let spin= document.querySelector('.logo');
spin.addEventListener("mouseenter", ()=> spinning());

const spinning= () => {
  TweenMax.to(spin, 1, {rotation:1800, ease: Power4.easeOut });
};

spin.addEventListener("mouseleave", ()=> spinningReverse());

const spinningReverse=() => {
  TweenMax.to(spin, 1, {rotation:0, ease: Power4.easeOut});
}


let spin2= document.querySelector('button');
spin2.addEventListener("mouseenter", ()=> spinning2());
spin2.addEventListener("mouseleave", ()=> spinningReverse2());

const spinning2= () => {
  TweenMax.to(spin2, 1, {rotation:360, ease: Power4.easeOut });
};

const spinningReverse2=() => {
  TweenMax.to(spin2, 1, {rotation:0, ease: Power4.easeOut});
}

