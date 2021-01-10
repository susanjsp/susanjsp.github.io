function initWindowTabs() {
  switch(window.location.pathname) {
    case "/":
      const homeActive = document.querySelector('#home-link');
      homeActive.classList.add('header-active');
      break;
    case "/projects":
      const projectActive = document.querySelector('#projects-link');
      projectActive.classList.add('header-active');
      break;
    case "/contact":
      const contactActive = document.querySelector('#contact-link');
      contactActive.classList.add('header-active');
  }
}

export { initWindowTabs };