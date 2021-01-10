// Tab Selector for projects page
function initProjects() {
  // VARIABLES //
  const tabLinks = document.querySelectorAll('.tablinks');
  const tabContent = document.querySelectorAll('.tabcontent');
  const defaultTab = tabContent[0];

  // Only display home tab on pageload
  tabContent.forEach(tab => tab.style.display = "none");
  defaultTab.style.display = "block";

  // FUNCTIONS //
  // Displays and hides tabs
  function openTab(e) {
  	// Hide other tabs
    tabContent.forEach(tab => tab.style.display = "none");
    // Display clicked tab
    const name = e.target.innerText.toLowerCase();
    document.getElementById(name).style.display = "block";
  };

  // Handles adding & removing active class from header
  function handleActive(e) {
    tabLinks.forEach(tabLink => {
      tabLink.classList.remove("active");
    });
    // If clicked link is in header, add active
    // If clicked link is on homepage, add active to corresponding tab
    if (e.target.classList.contains("tablinks")) {
      e.target.classList.add("active");
    } else {
      const temp = document.querySelector(`#${e.target.innerHTML}-link`);
      temp.classList.add("active");
    }
  };

  function clickedLink(link) {
    link.addEventListener('click', (e) => {
      openTab(e);
      handleActive(e);
    });
  }
  // EVENT LISTENERS //
  tabLinks.forEach(tLink => clickedLink(tLink));
}

// Toggle projects with big project button
function projectsToggle() {
  const projectButton = document.querySelector('#show-projects');
  const projectLinks = document.querySelectorAll('.projects-sidebar > .tablinks');

  function showButtons(link, i) {
    setTimeout(link.classList.toggle('hide'), 5000 * i);
    console.log('hi');
  }

  function showProjects() {
    let items = 0;
    projectLinks.forEach(link => {
      items++;
      showButtons(link, items);
    });
  };

  // EVENT LISTENERS //
  projectButton.addEventListener('click', showProjects);
}

export { initProjects, projectsToggle };
