// Actualiza automáticamente el año del footer.
const currentYearElement = document.getElementById("current-year");

if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}