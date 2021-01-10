import { initProjects, projectsToggle } from './project-tabs.js';
import { initWindowTabs } from './window-tabs.js';

initWindowTabs();

if (window.location.pathname === "/projects") {
  initProjects();
  projectsToggle();
};

