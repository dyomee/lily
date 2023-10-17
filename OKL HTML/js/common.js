$(document).ready(function () {
  AOS.init({
    duration: 1200
  });

  $('.quick_menu_btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  })
});
// 모달
$(document).ready(function () {
  $('.modal-close').click(function () {
    $(".modal").stop().fadeOut();
  });
});
function fView() {
  $(".modal").stop().fadeIn(400);
}

// 모바일메뉴
$(document).ready(function () {
  $("#mob_nav_btn").on("click", function () {
    $(this).toggleClass("active");
    $("#header").find("#mob_nav").toggleClass("active");
    $("body").toggleClass("scroll-off");
    $(".mob_nav_overlay").toggleClass("active");
  })
});

$(function () {
  $("#mob_gnb > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
      $(".depth_menu").slideUp();
    } else {
      $(".depth_menu").slideUp();
      $("#mob_gnb > li").removeClass("active")
      $(this).addClass("active");
      $(this).find(".depth_menu").stop().slideDown();
    }
  });
})


