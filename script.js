// Smooth Nav
document.querySelectorAll("[data-link]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Projects Modal
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function openProject(data){
  modalContent.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.desc}</p>
    <p><strong>Tech:</strong> ${data.tech}</p>
    <a class="primary-btn" href="${data.link}" target="_blank">View Project</a>
  `;
  modal.classList.add("open");
}

document.querySelectorAll(".project").forEach(p => {
  p.addEventListener("click", () => openProject(JSON.parse(p.dataset.project)));
});

closeModal.addEventListener("click", ()=> modal.classList.remove("open"));
modal.addEventListener("click", e => { if(e.target===modal) modal.classList.remove("open"); });


// Contact Form (Demo)
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  document.getElementById("formStatus").textContent = "Thanks — message received (demo).";
  e.target.reset();
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();
