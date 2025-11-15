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
    loop: true, // infinite loop
    speed: 1200, // smooth transition speed (ms)
    autoplay: {
      delay: 3000, // slides change every 3 seconds
      disableOnInteraction: false,
    },
    keyboard: { enabled: true },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
  });

    swiper.on("slideChange", function () {
    document.querySelectorAll(".swiper-slide-active .wow").forEach((el) => {
      el.classList.remove("animate__animated");
      void el.offsetWidth; // reset
      el.classList.add("animate__animated");
    });
  });

  // Certification Slider
  var swiper = new Swiper(".brandSlider", {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: true,
    speed: 3000, // slow + smooth movement
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
    },
    grabCursor: true,

    // Smooth linear motion
    freeMode: true,
    freeModeMomentum: false,

    breakpoints: {
      1200: { slidesPerView: 5 },
      991: { slidesPerView: 4 },
      767: { slidesPerView: 3 },
      575: { slidesPerView: 2 },
      0: { slidesPerView: 2 },
    },
  });

  // Partners Slider
  var partnerSlider = new Swiper(".partnerSlider", {
    loop: true,
    speed: 3000, // slow + smooth movement
    autoplay: {
      delay: 2000, // 1 second
      pauseOnMouseEnter: true,
    },
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true, // enables smooth swipe feeling
    breakpoints: {
      1200: { slidesPerView: 5 },
      992: { slidesPerView: 4 },
      768: { slidesPerView: 3 },
      480: { slidesPerView: 2 },
      320: { slidesPerView: 2 },
    },
  });

  // Serve Slider
  var partnerSlider = new Swiper(".serveSlider", {
    loop: true,
    speed: 3000, // slow + smooth movement
    autoplay: {
      delay: 1000, // 1 second
      pauseOnMouseEnter: true,
    },
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true, // enables smooth swipe feeling
    breakpoints: {
      1200: { slidesPerView: 5 },
      992: { slidesPerView: 4 },
      768: { slidesPerView: 3 },
      480: { slidesPerView: 2 },
      320: { slidesPerView: 2 },
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

  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });

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

  // Get Bootstrap Container Offset Value
  function getContainerOffset() {
    const container = document.querySelector(".container");
    const rect = container.getBoundingClientRect();

    return {
      left: rect.left,
      right: window.innerWidth - rect.right,
      width: rect.width,
    };
  }

  function updateOffsetCSS() {
    const offset = getContainerOffset();

    document.documentElement.style.setProperty(
      "--container-offset",
      offset.left + "px"
    );
  }

  updateOffsetCSS();
  window.addEventListener("resize", updateOffsetCSS);
})(jQuery);
