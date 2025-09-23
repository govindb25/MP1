/* Your JS here. */
console.log('Hello World!')

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; 
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

const modal = document.getElementById("experience-modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const roleDescriptions = {
  research: `
    <h3>Research Intern</h3>
    <h4>University of Colorado Denver Anschutz Medical Campus</h4>
    <p>Analyzed fluorescence microscopy data using MATLAB to optimize drug concentration measurements and improve data processing efficiency. Contributed to research on drug delivery through contact lenses for treating eye diseases.</p>
  `,
  undergrad: `
    <h3>Undergraduate Researcher</h3>
    <h4>Dr. Howard Gritton Research Lab</h4>
    <p>Conducted behavioral and optogenetic experiments on mice to study the cholinergic system in auditory cortex function. Developed MATLAB scripts for data acquisition and analysis using TDT systems to examine neural activity.</p>
  `,
  project: `
    <h3>Project Lead</h3>
    <h4>Sudden Cardiac Death Awareness Research Foundation</h4>
    <p>Led a research team on a publication exploring ML and AI applications in cardiac imaging for heart disease diagnosis. Organized fundraising efforts to donate AEDs to underserved communities.</p>
  `
};

document.querySelectorAll(".experience-tile").forEach(tile => {
  tile.addEventListener("click", () => {
    const role = tile.getAttribute("data-role");
    modalText.innerHTML = roleDescriptions[role];
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


