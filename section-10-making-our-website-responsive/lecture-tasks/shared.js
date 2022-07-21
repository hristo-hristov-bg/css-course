var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var noButton = document.querySelector(
  ".modal__actions .modal__action--negative"
);
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

if (noButton) {
  noButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", () => {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", () => {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
