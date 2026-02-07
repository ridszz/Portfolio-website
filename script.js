function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
function showSkills(category) {
  // Remove active class from all tabs
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  // Hide all skill grids
  document.querySelectorAll(".skills-grid").forEach(grid => {
    grid.classList.remove("active");
  });

  // Show selected grid
  document.getElementById(category).classList.add("active");

  // Activate clicked tab
  event.target.classList.add("active");
}
const projects = {
  engine: {
    title: "AI based Document Forgery Detection Tool.",
    desc: "Developed an AI-based document forgery detection system using Python and machine learning techniques to identify tampered or manipulated documents. Implemented preprocessing, feature extraction, and classification to analyze document authenticity through a web interface.",
    image: "assets/images/engine.png",
    link: "https://github.com/ridszz/document-forgery-detector"
  },
  attendance: {
    title: "Patient Information & Appointment Management Web Application",
    desc: "Converted a desktop-based patient information and appointment booking system into a web application using Node.js, Express, and SQLite. Implemented secure authentication, database-driven patient data retrieval, and appointment scheduling with server-side validation.",
    image: "assets/images/attendance.png",
    link: "https://github.com/ridszz/Landing-page"
  },
  safecount: {
    title: "E commerce website",
    desc: "Built a responsive e-commerce website featuring product listings, cart management, and checkout flow. Focused on clean UI, reusable components, and real-world user interactions to simulate an online shopping experience.",
    image: "assets/images/safecount.png",
    link: "https://github.com/ridszz/E-commerce-website"
  }
};

function openProject(key) {
  const p = projects[key];
  document.getElementById("previewTitle").innerText = p.title;
  document.getElementById("previewDesc").innerText = p.desc;
  document.getElementById("previewImage").src = p.image;
  document.getElementById("previewLink").href = p.link;

  document.getElementById("projectPreview").style.display = "flex";
}

function closeProject() {
  document.getElementById("projectPreview").style.display = "none";
}
