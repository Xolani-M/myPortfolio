// ...

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add('dark-mode');
  header.classList.add('dark-mode');
  footer.classList.add('dark-mode');
  toggleButton.innerText = 'Light Mode'; // Change the button text
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove('dark-mode');
  header.classList.remove('dark-mode');
  footer.classList.remove('dark-mode');
  toggleButton.innerText = 'Dark Mode'; // Change the button text
}

