$(document).ready(function () {
  //Ovcanvas menu js
  $('.canvas-icon').click(function () {
    $('.header-right-area').toggleClass('offcanvas');
    return false;
  });
  //dropdown mobile menu js
  $('.menubar-area ul li a').on('click', function (e) {
    if (Modernizr.mq('screen and (max-width:768px)')) {
      e.preventDefault();
      $(this).next($('.menubar-area ul ul')).slideToggle();
    }
    return false;
  });
  //wow js
  new WOW().init();
  //back to top js
  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
  // End number count for stats, using jQuery animate
  // scrollIt Start
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: 'swing', // the easing function for animation
    scrollTime: 1300, // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -0 // offste (in px) for fixed top navigation
  });
  // scrollIt End
  //owl carosel js
  $('.testmonial-slide-main').owlCarousel({
    loop: true,
    margin: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  })

  //smoothScroll
  $(function() {
    $('.nav-link').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000); 
          return false;
        }
      }
    });
  });

});
//hover arrow js
var $lutz = $('.lutz'),
  $toeloop = $('.toeloop'),
  $container = $('.slide'),
  container_w = $container.width(),
  container_h = $container.height();
$(window).on('mousemove.parallax', function (event) {
  var pos_x = event.pageX,
    pos_y = event.pageY,
    left = 0,
    top = 0;
  left = container_w / 2 - pos_x;
  top = container_h / 2 - pos_y;
  TweenMax.to($toeloop, 1, {
    css: {
      transform: 'translateX(' + left / 20 + 'px) translateY(' + top / 10 + 'px)'
    },
    ease: Expo.easeOut,
    overwrite: 'all'
  });
  TweenMax.to($lutz, 1, {
    css: {
      transform: 'translateX(' + left / 20 + 'px) translateY(' + top / 10 + 'px)'
    },
    ease: Expo.easeOut,
    overwrite: 'all'
  });
});
//typer text js
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 1px solid transparent}";
  document.body.appendChild(css);
};

