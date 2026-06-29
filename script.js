/**
 * Portfolio Interactive Behaviors
 * Mansi Dubey - UI/UX Design & Front-End Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Management (Light / Dark Mode) ---
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Retrieve saved theme preference, default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });


  // --- Mobile Drawer Menu ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close menu when clicking links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });


  // --- Design System Sandbox Explorer Widget ---
  const sandboxCard = document.getElementById('sandboxCard');
  const sandboxButton = document.getElementById('sandboxButton');
  const sandboxBadge = document.getElementById('sandboxBadge');
  
  // Hand-off spec code nodes
  const specColorSpan = document.getElementById('specColor');
  const specRadiusSpan = document.getElementById('specRadius');
  const specPaddingSpan = document.getElementById('specPadding');
  const specFontSpan = document.getElementById('specFont');

  // 1. Color Token Action
  const colorTokens = document.querySelectorAll('.color-token');
  colorTokens.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states
      colorTokens.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedColor = btn.getAttribute('data-color');
      
      // Update custom properties on card
      sandboxCard.style.setProperty('--local-accent', selectedColor);
      sandboxButton.style.backgroundColor = selectedColor;
      
      // Update badge border & text colors
      sandboxBadge.style.color = selectedColor;
      sandboxBadge.style.borderColor = selectedColor + '40'; // add transparency
      sandboxBadge.style.backgroundColor = selectedColor + '15';

      // Update developer hand-off display code
      specColorSpan.textContent = selectedColor;
    });
  });

  // 2. Border Radius Token Action
  const radiusTokens = document.querySelectorAll('.border-radius .token-btn');
  radiusTokens.forEach(btn => {
    btn.addEventListener('click', () => {
      radiusTokens.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedRadius = btn.getAttribute('data-radius');
      
      // Update mock card style
      sandboxCard.style.setProperty('--local-radius', selectedRadius);

      // Update developer hand-off display code
      specRadiusSpan.textContent = selectedRadius;
    });
  });

  // 3. Spacing / Padding Token Action
  const paddingTokens = document.querySelectorAll('.padding .token-btn');
  paddingTokens.forEach(btn => {
    btn.addEventListener('click', () => {
      paddingTokens.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedPadding = btn.getAttribute('data-padding');
      
      // Update mock card style
      sandboxCard.style.setProperty('--local-padding', selectedPadding);

      // Update developer hand-off display code
      specPaddingSpan.textContent = selectedPadding;
    });
  });

  // 4. Typography Scale Token Action
  const textScaleTokens = document.querySelectorAll('.text-scale .token-btn');
  textScaleTokens.forEach(btn => {
    btn.addEventListener('click', () => {
      textScaleTokens.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedFont = btn.getAttribute('data-font');
      
      // Update mock card style
      sandboxCard.style.setProperty('--local-font', selectedFont);

      // Update developer hand-off display code
      specFontSpan.textContent = selectedFont;
    });
  });


  // --- Scroll Spy: Highlight nav menu links on scroll ---
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // offset header height
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
