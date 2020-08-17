hamburgerMenu = function () {
  const menu = document.getElementById("nav__list");
  const close = document.getElementById("toggle");

  function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
      close.checked = false;
    }
  }
  menu.addEventListener("click", handleMenuClick);
};
hamburgerMenu();
