// Smooth scroll
document.querySelectorAll("[data-link]").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  });
});

// Modal
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".project").forEach(card=>{
  card.addEventListener("click",()=>{
    const data = JSON.parse(card.dataset.project);
    modalContent.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.desc}</p>
      <p><strong>Tech:</strong> ${data.tech}</p>
      <a href="${data.link}" target="_blank">View Project</a>
    `;
    modal.classList.add("open");
  });
});

closeModal.onclick = ()=> modal.classList.remove("open");
modal.onclick = e=>{
  if(e.target===modal) modal.classList.remove("open");
};
