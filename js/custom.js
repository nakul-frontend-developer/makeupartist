$(document).ready(function () {
  $(document).on("click", ".portfolio-category", function () {
    $(this).parents(".category-wrapper").find("nav").slideToggle();
  });

  $(document).on(
    "click",
    ".category-wrapper>nav .nav-tabs .nav-link",
    function () {
      $("#loader").css("opacity", "1");
      setTimeout(() => {
        $("#loader").css("opacity", "0");
      }, 2000);
      if ($(window).width() < 991) {
        $(".category-wrapper").find("nav").slideToggle();
      }
    }
  );

  $("#nav-icon3").click(function () {
    $(this).toggleClass("open");
    $("body").toggleClass("open");
  });

  var headerHeight = 0;
  if ($(window).width() < 767) {
    headerHeight = 61;
  }

  var sections = $("section"),
    nav = $(".menu"),
    nav_height = headerHeight;

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });

  nav.find("a").on("click", function () {
    $("body, #nav-icon3").removeClass("open");
    $(this).parent("li").addClass("active");
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height,
      },
      500
    );

    return false;
  });
});
