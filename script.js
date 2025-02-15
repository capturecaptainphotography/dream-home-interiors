// Open Popup
document.getElementById('explore-btn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'flex';
});

// Close Popup
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

// Close Popup on Outside Click
window.addEventListener('click', (e) => {
  const popup = document.getElementById('popup');
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for sticky header if needed
        behavior: 'smooth' // Enable smooth scrolling
      });
    }
  });
});