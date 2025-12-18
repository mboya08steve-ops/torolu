const projectCards = document.querySelectorAll('.project-card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('#lightbox .close');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = card.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if(e.target === lightbox) lightbox.style.display = 'none';
});

// Array of projects
const projects = [
  {img: "img/projects/DYCK2332.JPG", title: "Commercial Complex", desc: "High-quality commercial space built with precision."},
  {img: "img/projects/SQQE7473.JPG", title: "Residential Apartments", desc: "Modern, comfortable apartments for families and professionals."},
  {img: "img/projects/BBXQ7668.JPG", title: "Modern Office Building", desc: "Stylish office space designed for productivity and aesthetics."},
  {img: "img/projects/BRJU7796.JPG", title: "Luxury Villas", desc: "Exclusive villas with modern amenities and landscape design."},
  {img: "img/projects/BLQC9463.JPG", title: "Retail Center", desc: "Shopping space with contemporary design and open layout."},
  {img: "img/projects/BSMD2930.JPG", title: "Industrial Park", desc: "Well-planned industrial space for manufacturing and logistics."},
  {img: "img/projects/CITG6560.JPG", title: "Hospital Complex", desc: "Medical facility designed for efficiency and patient comfort."},
  {img: "img/projects/EKDJ7035.JPG", title: "Mixed-Use Development", desc: "Residential, commercial, and office spaces in one project."},
  {img: "img/projects/EUYL2277.JPG", title: "Eco-Friendly Apartments", desc: "Sustainable design with energy-saving systems."},
  {img: "img/projects/GJAN4700.JPG", title: "Corporate Headquarters", desc: "Modern office building with open-plan workspace."},
  {img: "img/projects/GQNP4342.JPG", title: "Student Housing", desc: "Safe and comfortable housing for students."},
  {img: "img/projects/JBLQ5213.JPG", title: "Boutique Hotel", desc: "Luxury hotel designed for guests' comfort."},
  {img: "img/projects/JPFG1506.JPG", title: "Community Center", desc: "Spaces designed for social, cultural, and recreational activities."},
  {img: "img/KPME6014.JPG", title: "Sports Complex", desc: "Modern sports facilities with spectator areas."},
  {img: "img/YICA6059.JPG", title: "Warehouse Facility", desc: "High-capacity storage with organized logistics."},
  {img: "img/PWYG6922.JPG", title: "Office Park", desc: "Cluster of modern office buildings with parking spaces."},
  {img: "img/projects/UYHF3615.JPG", title: "Luxury Condominiums", desc: "Premium apartments with beautiful interiors."},
  {img: "img/projects/XAGU5555.JPG", title: "Townhouses", desc: "Modern townhouse complexes for families."},
  {img: "img/projects/YICA6059.JPG", title: "Healthcare Clinic", desc: "Clinic designed for community accessibility and comfort."},
  {img: "img/projects/WVZO4505.JPG", title: "Event Center", desc: "Facility for conferences, events, and gatherings."}
];

// Initial load variables
let itemsPerLoad = 6;
let currentIndex = 0;

const projectsGrid = document.getElementById("projectsGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// Function to render projects
function renderProjects() {
  const nextIndex = currentIndex + itemsPerLoad;
  const projectsToShow = projects.slice(currentIndex, nextIndex);

  projectsToShow.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}">
      <div class="overlay">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
      </div>
    `;
    projectsGrid.appendChild(card);

    // Lightbox click
    card.addEventListener("click", () => {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.querySelector(".lightbox-img");
      lightbox.style.display = "flex";
      lightboxImg.src = project.img;
    });
  });

  currentIndex = nextIndex;

  if (currentIndex >= projects.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Load initial projects
renderProjects();

// Load more button event
loadMoreBtn.addEventListener("click", renderProjects);

// Lightbox close
document.querySelector("#lightbox .close").addEventListener("click", () => {
  document.getElementById("lightbox").style.display = "none";
});
