$(function () {
  // new WOW().init();
  $(".hiw-carousel").owlCarousel({
    margin: 50,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsiveClass: true,
    items: 1,
    nav: true,
    dots: true,
    navText: ["<span id='prev'></span>", "<span id='next'></span>"],
  });
  $("#scroll").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(".about").offset().top - 50,
      },
      1000
    );
  });
  $("header  .nav-link").click(function (e) {
    e.preventDefault();
    let target = $(this).data("target");
    $("html,body").animate(
      {
        scrollTop: $("#" + target).offset().top - 50,
      },
      1000
    );
  });
  $(window).on("scroll", function () {
    let position = $(this).scrollTop();
    if (position > 100) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
});
