import anime from '../anime-master/lib/anime.es.js';

// Wrap letters in a span
function animateLetters(e) {
  let textWrapper = e.target.querySelector('.animate-letters');
  if (textWrapper == null) return;
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block'>$&</span>");
  console.log(textWrapper.querySelectorAll('.letter'));

  anime({
    targets: textWrapper.querySelectorAll('.letter'),
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    opacity: [0, 100],
    delay: anime.stagger(100)
  });
}

export { animateLetters };