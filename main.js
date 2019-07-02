$(".main-nav a").click(function(e) {
  menuToggle();
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      500
    );
  }
});

function menuToggle() {
  $(".main-nav__menu").toggleClass("main-nav__menu--opened");
}
$(".main-nav__hamburger").click(function() {
  menuToggle();
});
