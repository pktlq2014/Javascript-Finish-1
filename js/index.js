/*
=============
Navigation
đóng, mở thanh menu
=============
 */
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});

/*
=============
PopUp
đóng form xuất hiện đầu tên trên màn hình
=============
 */
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");
// nếu có class này
if (popup) {
  closePopup.addEventListener("click", () => {
    // thì thêm class .hide__popup vào chung với .popup để xử lý trong css
    popup.classList.add("hide__popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide__popup");
    }, 500);
  });
}

/*
=============
Fixed Navigation
scroll lên đầu trang khi kéo xuống tói cuối cùng
=============
 */

const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");

// Smooth Scroll
Array.from(scrollLink).map(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navContainer.style.left = "-30rem";
    document.body.classList.remove("active");
  });
});

// Fix NavBar
// scroll lên đầu trang khi kéo xuống tói cuối cùng

window.addEventListener("scroll", e => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }
  // nút scroll lên đầu trang ẩn rồi, đo khoảng cách vs menu xa menu thì hiện ra nút scroll
  if (scrollHeight > 300) {
    gotoTop.classList.add("show-top");
  } else {
    gotoTop.classList.remove("show-top");
  }
});
// insert 1
// animation class="animate-left"
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
// insert 4 + 5
const responsive = {
  0: {
      items: 1
  },
  320: {
      items: 1
  },
  560: {
      items: 2
  },
  960: {
      items: 3
  }
}
$(document).ready(function () {

  // $nav = $('.nav');
  // $toggleCollapse = $('.toggle-collapse');

  // /** click event on toggle menu */
  // $toggleCollapse.click(function () {
  //     $nav.toggleClass('collapse');
  // })

  // owl-crousel for blog
  $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3000,
      dots: false,
      nav: true,
      navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
      responsive: responsive
  });


  // click to scroll top
  $('.move-up span').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
  })

  // AOS Instance
  AOS.init();

});
// insert > 6
$(document).ready(function () {
  "use strict"
  // hiệu ứng chuyển động nước
  $('.slider').ripples({
      dropRadius: 13,
      perturbance: 0.01,
  });

  // hiệu ứng chuyển động chữ
  var typed = new Typed('.typed', {
      stringsElement: '#typed-strings',
      //     strings: ['i love<strong class="primary"> codings.</strong>', 'and to<strong class="primary"> share !!.</strong>'],
      typespeed: 0,
      // lặp lại vô hạn
      loop: true
  });

  const gotoTop = document.querySelector(".container1");
  $(window).scroll(function () {
      var top = $(window).scrollTop();
      if (top >= 10) {
          gotoTop.classList.add("secondary");
          // $("nav").addClass('secondary');
      }
      else {
          gotoTop.classList.remove("secondary");
          //   $("nav").removeClass('secondary');
      }
  });



  // hiệu ứng hiển thị và load khi click vào ảnh
  $('.work').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
          enabled: true
      }
  });

  // slider
  $('.bxslider').bxSlider({
      mode: 'horizontal',
      moveSlides: 1,
      slideMargin: 40,
      infiniteLoop: true,
      minSliders: 1,
      maxSlides: 1,
      speed: 1200,

  });



  // ảnh swiper
  if ($(".swiper-container").hasClass("team-member-slider")) {
      var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          allowTouchMove: true,
          loop: true,
          centeredSlides: true,
          slideToclickedslide: true,
          effect: "coverflow",
          grabcursor: true,
          autoplay: false,
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          },
          coverflow: {
              rotate: 0,
              stretch: 100,
              depth: 200,
              modifier: 1,
              slideShadows: false
          },
          breakpoints: {
              767: {
                  slidesPerView: 1,
                  centeredSlides: false,
                  effect: "slide",
              }
          }
      });
  }



  $("#work").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
          enabled: true
      }
  });




  const questions = document.querySelectorAll(".question");
  questions.forEach(function (question) {
      const btn = question.querySelector(".question-btn");
      btn.addEventListener("click", function () {
          // questions.forEach(function (item) {
          //     if (item !== question) {
          //         item.classList.remove("show-text");
          //     }
          // });
          question.classList.toggle("show-text");
      });
  });




  let tabHeader = document.querySelector(".tab-header");
  let tabIndicator = document.querySelector(".tab-indicator");
  let tabBody = document.querySelector(".tab-body");
  let tabsPane = tabHeader.getElementsByTagName("div");

  for (let i = 0; i < tabsPane.length; i++) {
      tabsPane[i].addEventListener("click", function () {
          tabHeader.querySelector(".active").classList.remove("active");
          // khi click vào thằng div thứ 2 trong header
          tabsPane[i].classList.add("active");
          tabBody.querySelector(".active").classList.remove("active");
          tabBody.getElementsByTagName("div")[i].classList.add("active");
          tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
      });
  }





  $(document).ready(function () {
      $('.swift').click(function () {
          var signButton = $(this).html();
          console.log("test 1: " + signButton);
          debugger;
          if (signButton == 'Sign In') {
              $('.sign_up').html('Sign In'); // sign up button text change
              $('.sign_in').html('Sign Up'); // sign in button text change
              $('.swift_right').show(); // second logo show
              $('.b-forgot').show(); // forgot option show
              $('.form_title').html('Sign in to Guide'); // form title text change
              $('.b-subtext').html('or use your email account'); // form sub title text change
              $('.user_title').html('Hello, Friend'); // user title text change
              $('.user_subTitle').html('Enter your personal details </br> and start journey with us.'); // user sub title text change
             // $('.b-title').css('margin-top', '100px'); // user section add margin top in css
              $('.swift_left').hide(); // default logo hide
              $('.username').hide(); // form user field hide
              $('.b-wrapper').addClass('swift_element'); // add reverse
          } else {
              $('.sign_up').html('Sign Up'); // sign up button text change
              $('.sign_in').html('Sign In'); // sign in button text change
              $('.swift_right').hide(); // second logo hide
              $('.b-forgot').hide(); // forgot option hide
              $('.form_title').html('Create Account');
              $('.b-subtext').html('or use your email for registration');
              $('.user_title').html('Welcome Friend');
              $('.user_subTitle').html('To keep Connected with us please </br> login with your personal info.');
              $('.b-title').css('margin-top', '0px');
              $('.swift_left').show();
              $('.username').show();
              $('.b-wrapper').removeClass('swift_element');
          }

      })
  })

});