document.addEventListener("DOMContentLoaded", () => {
  const scoreCards = document.querySelectorAll(".score-card");
  const sections = document.querySelectorAll(".section");
  const viewHome = document.getElementById("view-home");
  const viewSection = document.getElementById("view-section");
  const backBtn = document.getElementById("back-btn");

  function openSection(id) {
    // Show detail view
    viewHome.classList.remove("active");
    viewSection.classList.add("active");

    // Show only the selected section
    sections.forEach((sec) => {
      sec.classList.toggle("active", sec.id === id);
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function goHome() {
    // Hide all sections
    sections.forEach((sec) => sec.classList.remove("active"));
    // Show home scorecard view
    viewSection.classList.remove("active");
    viewHome.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Click handlers for score cards
  scoreCards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetId = card.dataset.section;
      if (targetId) {
        openSection(targetId);
      }
    });
  });

  // Back button to scorecard
  if (backBtn) {
    backBtn.addEventListener("click", goHome);
  }
});

// Polaroid enlarge modal
const polaroids = document.querySelectorAll(".polaroid");
const modal = document.getElementById("polaroid-modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const modalClose = document.querySelector(".modal-close");

polaroids.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.dataset.img;
    const caption = card.dataset.caption;

    modalImg.src = imgSrc;
    modalCaption.textContent = caption;

    modal.style.display = "flex";
  });
});

// Close modal
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



