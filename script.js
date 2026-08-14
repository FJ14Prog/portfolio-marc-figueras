// Actualiza automáticamente el año del footer.
const currentYearElement = document.getElementById("current-year");

if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Mostra el botó "Tornar a dalt" després de fer scroll.
const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });
}