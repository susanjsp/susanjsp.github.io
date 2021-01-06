// VARIABLES //
const tabLinks = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll('.tabcontent');
const homePage = document.getElementById("home");

// Only display home tab on pageload
tabContent.forEach(tab => tab.style.display = "none");
homePage.style.display = "flex";

// FUNCTIONS //
// Displays and hides tabs
function openTab(e) {
	// Hide other tabs
  tabContent.forEach(tab => tab.style.display = "none");
  // Display clicked tab
  document.getElementById(e.target.innerHTML).style.display = "flex";
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
const homeLinks = homePage.querySelectorAll(".links a");
tabLinks.forEach(tLink => clickedLink(tLink));
homeLinks.forEach(hLink => clickedLink(hLink));