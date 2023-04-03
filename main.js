// ocish tugmasi qilish uchun
const openBtn = document.querySelector("#mobile-menu-open-btn");
openBtn.addEventListener("click", openMenu);

function openMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.add("display-block");
}

// yopish tugmasini qilish uchun
const closeBtn = document.querySelector("#mobile-menu-close-btn");
closeBtn.addEventListener("click", closeMenu);

function closeMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.remove("display-block");
}
