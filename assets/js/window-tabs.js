function initWindowTabs() {
  const allTabs = document.querySelectorAll('.header a');
  allTabs.forEach(tab => tab.classList.remove('header-active'));

  switch(window.location.pathname) {
    case "/":
      const homeActive = document.querySelector('a[data-tab="home"]');
      homeActive.classList.add('header-active');
      break;
    case "/about":
      const aboutActive = document.querySelector('a[data-tab="about"]');
      aboutActive.classList.add('header-active');
      break;
      case "/talks":
        const talksActive = document.querySelector('a[data-tab="talks"]');
        talksActive.classList.add('header-active');
        break;
    case "/contact":
      const contactActive = document.querySelector('a[data-tab="contact"]');
      contactActive.classList.add('header-active');
      break;
    default:
      const projectActive = document.querySelector('a[data-tab="projects"]');
      projectActive.classList.add('header-active');
      break;
  }
}

export { initWindowTabs };