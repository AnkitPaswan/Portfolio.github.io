$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });
  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });
  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });
  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
  // typing text animation script
  var typed = new Typed('.typing', {
    strings: ['MERN Developer', 'App Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed('.typing-2', {
    strings: [
      'MERN stack Developer',
      'App Developer',
      'Designer',
      'Freelancer',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var icon = document.getElementById('icon');

  icon.onclick = function () {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
      image.src = 'images/ankitLight.png';
      icon.src = 'images/moon.svg';
      footer.src = 'images/footer1.svg';
    } else {
      image.src = 'images/bitmoji2.png';
      icon.src = 'images/sun.png';
      footer.src = 'images/footer.svg';
    }
  };

  // owl carousel script

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});



function sendmail(){
  var name = $('#Name').val();
  var email = $('#Sender').val();
  var subject = $('#Subject').val();
  var message = $('#Message').val();
}

   Email.send({
       Host : "smtp.gmail.com",
       Username : "ankitpaswan192@gmail.com",
       Password : "85418065",
       To : 'ankitpaswan03881@gmail.com',
       From : "ankitpaswan192@gmail.com",
       Subject : "New mail on contact form from"+ name,
       Body : Body
   }).then(
     message=>{
       if(message=='0k'){
           alert('your mail has been sent successfully');
       }else{
           console.error(message);
           alert('their is error')
       }
     }
   );