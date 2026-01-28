const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal-close");

const closeAllModals = () => {
  modals.forEach((modal) => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
};

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.modal;
    const modal = document.getElementById(`modal-${target}`);
    if (!modal) {
      return;
    }
    closeAllModals();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeAllModals();
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeAllModals();
    }
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllModals();
  }
});

const rewardCards = document.querySelectorAll("[data-expand='reward']");

rewardCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
    card.setAttribute("aria-expanded", card.classList.contains("expanded"));
  });
});
