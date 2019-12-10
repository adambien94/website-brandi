$(".main-nav a").on("click", function(e) {
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

$(".main-nav__hamburger").on("click", () => {
  menuToggle();
});

function menuToggle() {
  $(".main-nav__menu").toggleClass("main-nav__menu--opened");
  $(".hamburger__stripes").toggleClass("hamburger__stripes--crossed");
}

$('input:radio[name="images"]').change(function() {
  if ($(this).attr("id") === "i1") {
    $(".main-header__background").css("transform", "translateY(0)");
  } else if ($(this).attr("id") === "i2") {
    $(".main-header__background").css("transform", "translateY(100%)");
  } else if ($(this).attr("id") === "i3") {
    $(".main-header__background").css("transform", "translateY(200%)");
  }
});

const counters = document.querySelectorAll(".counter");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-50px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target.id);
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});
