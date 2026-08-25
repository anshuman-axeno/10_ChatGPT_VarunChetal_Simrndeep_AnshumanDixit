const overlay = document.getElementById("modal-overlay");

document.querySelectorAll(".claim-offer").forEach(btn => {
  btn.addEventListener("click", () => overlay.classList.add("open"));
});

document.getElementById("modal-close").addEventListener("click", () => {
  overlay.classList.remove("open");
});