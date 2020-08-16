$(function () {
  $(".hamburger").click(function () {
    // toggle class show on the menu
    $(".menu").addClass("show");
  });

  $(".exit").click(function () {
    // toggle class show on the menu
    $(".menu").removeClass("show");
  });
});
