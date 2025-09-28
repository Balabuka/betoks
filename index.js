// Responsive navigation menu toggle

const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');
if (menuToggle && navUl) {
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  // Close menu when clicking a nav link
  navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('active');
    });
  });

  // Close menu when clicking outside nav
  document.addEventListener('click', (e) => {
    if (navUl.classList.contains('active')) {
      if (!navUl.contains(e.target) && e.target !== menuToggle) {
        navUl.classList.remove('active');
      }
    }
  });
}

// Draggable before/after slider for 'Few works done' section

document.addEventListener('DOMContentLoaded', () => {
  // Only navigation and smooth scroll features remain

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault(); 
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Highlight active nav link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active-link');
    }
  });
});

// Optional: Add CSS for active nav link
const style = document.createElement('style');
style.innerHTML = `.active-link { background: #38bdf8 !important; color: #fff !important; }`;
document.head.appendChild(style);
