// Header

function header() {
  const burgerButton = document.querySelector('#burger');
  const navbarToggle = document.querySelector('nav');
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('toggle');
    navbarToggle.classList.toggle('active');
  });

  //  When reload page check location page
  if (window.pageYOffset > 680) {
    document.querySelector('header').style.backgroundColor = '#0eb493';
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 680) {
      document.querySelector('header').style.backgroundColor = '#0eb493';
    } else {
      document.querySelector('header').style.backgroundColor = '#1016363f';
    }
  });
}

header();

function slider() {
  $('#slider-banner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  function textAnimationToggle() {
    document.querySelector('.banner__content').classList.toggle('active');
  }

  textAnimationToggle();

  $('#slider-banner').on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      textAnimationToggle();
      setTimeout(() => {
        textAnimationToggle();
      }, 300);
    }
  );
}

slider();

function features() {
  $('#slider-features').slick({
    dots: true,
    arrows: false,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

features();
