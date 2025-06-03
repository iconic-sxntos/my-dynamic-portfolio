// Task 1: Dynamic Year
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Task 2: Skill Card Interaction
const skillCards = document.querySelectorAll('.skill-card');
const skillDescription = document.getElementById('skill-description');

const skillInfo = {
    "HTML": "HTML (HyperText Markup Language) is the backbone of all web pages, defining their structure.",
    "CSS": "CSS (Cascading Style Sheets) is used to style the visual presentation of web pages, making them look great!",
    "JavaScript": "JavaScript is a programming language that enables interactive web pages, allowing complex features and dynamic content."
};

if (skillDescription) {
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skill = card.dataset.skill;
            if (skillInfo[skill]) {
                skillDescription.textContent = skillInfo[skill];
                skillDescription.style.color = '#555'; // updated to blend with theme
            }
        });
    });
}

// Task 3: Dark Mode Toggle with Preference Saving
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

// Apply saved theme on load
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});

// Task 4: Load Projects from JSON
const projects = [
  {
    "name": "My First HTML Page",
    "description": "A simple static page demonstrating basic HTML structure and elements.",
    "tech": ["HTML"],
    "github": "https://github.com/SXNTOS/html-page",
    "demo": "https://sxntos.github.io/html-page"
  },
  {
    "name": "CSS Styling Practice",
    "description": "Explored various CSS properties to style text, colors, and layout.",
    "tech": ["CSS"],
    "github": "https://github.com/SXNTOS/css-practice",
    "demo": "https://sxntos.github.io/css-practice"
  },
  {
    "name": "Interactive JavaScript Fun",
    "description": "Implemented basic JavaScript to add dynamic behavior and user interaction.",
    "tech": ["JavaScript"],
    "github": "https://github.com/SXNTOS/js-fun",
    "demo": "https://sxntos.github.io/js-fun"
  }
];

const projectContainer = document.querySelector('.projects-container');

function getIconForTech(tech) {
    const icons = {
        HTML: '<i class="fab fa-html5" title="HTML5"></i>',
        CSS: '<i class="fab fa-css3-alt" title="CSS3"></i>',
        JavaScript: '<i class="fab fa-js-square" title="JavaScript"></i>'
    };
    return tech.map(t => icons[t] || '').join('');
}

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="tech-icons">${getIconForTech(project.tech)}</div>
        <div class="project-links">
            <a href="${project.github}" target="_blank" title="GitHub Repo"><i class="fab fa-github"></i></a>
            <a href="${project.demo}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
        </div>
    `;
    projectContainer.appendChild(card);
});
