// script.js

const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

// Toggle Sidebar
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  content.classList.toggle('shift');
});
