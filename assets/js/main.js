(function ($) {
  "use strict";

  var windowOn = $(window);

  windowOn.on("load", function () {
    wowAnimation();
  });

  // preloader
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });

  // back-to-top
  var btn = $("#back-to-top");
  windowOn.scroll(function () {
    if (windowOn.scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // sticky js
  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 100) {
      $("#tp-header-sticky").removeClass("header-sticky");
    } else {
      $("#tp-header-sticky").addClass("header-sticky");
    }
  });

  // data bg img
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // data bg color
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // data bg color
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  $(".popup-image").magnificPopup({
    type: "image",
    // other options
  });
  $(".popup-video").magnificPopup({
    type: "iframe",
    // other options
  });

  if ($(".grid").length != 0) {
    var $grid = $(".grid").imagesLoaded(function () {
      $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: 1,
        },
      });

      // filter items on button click
      $(".tp-portfolio-filter").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });
      //for menu active class
      $(".tp-portfolio-filter button").on("click", function (event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
      });
    });
  }

  // banner slider
  var swiper = new Swiper(".banner-active", {
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: { enabled: true },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // wow
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }

  // jarallax
  if ($(".jarallax").length) {
    $(".jarallax").jarallax({
      speed: 0.2,
    });
  }

  // Menu
  const hamMenu = document.querySelector(".ham-menu");
  const offcanvasMenu = document.querySelector(".offcanvas-menu");
  const closeMenu = document.querySelector(".mobile-header i");
  const overlay = document.querySelector(".offcanvas-overlay");
  const submenuToggles = document.querySelectorAll(
    ".offcanvas-menu .mobile-menu li > a i"
  );

  // ✅ Open Menu
  hamMenu.addEventListener("click", function () {
    offcanvasMenu.classList.add("active");
    overlay.classList.add("active");
  });

  // ✅ Close Menu
  closeMenu.addEventListener("click", function () {
    offcanvasMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // ✅ Close on Overlay Click
  overlay.addEventListener("click", function () {
    offcanvasMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // ✅ Toggle Submenu
  submenuToggles.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      e.preventDefault();
      const parentLi = this.closest("li");

      // Close others (accordion behavior)
      document
        .querySelectorAll(".offcanvas-menu .mobile-menu li.open")
        .forEach((item) => {
          if (item !== parentLi) item.classList.remove("open");
        });

      parentLi.classList.toggle("open");
    });
  });
})(jQuery);
