import { initWindowTabs } from './window-tabs.js';
import { animateLetters } from './button-animation.js';

initWindowTabs();

let buttons = document.querySelectorAll('.btn-links');
buttons.forEach(button => button.addEventListener('mouseenter', (e) => animateLetters(e)));


