$(document).ready(function(){

  const question = [0,1,2,3];
  let questions = question.sort(() => Math.random() - Math.random()).slice(0, 3);
  sessionStorage.setItem('questions-interview', questions);

  setInterval(() => {
    if ($('#check-slide').hasClass('swiper-slide-active')) {
      $('.next-button').css('display','flex');
      $('.send-button-mobile').css('display','none');
    }
  }, 1000)

  // document.addEventListener('swiped', function(e) {
  //     console.log(e.target); // the element that was swiped
  //     console.log(e.detail.dir);
  //     alert('wefwfe') // swiped direction
  // });

  var swiper = new Swiper('.swiper-container', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
    },
  });


  if ($( ".swiper-slide:last-child" ).hasClass( "swiper-slide-active" )) {
    $('.send-button-mobile').css("display", "none");
  }

  // $('body').bind('htmlchanged', function (e, data) {
  //     alert('hi')
  // });

  if (sessionStorage.getItem("mode") == 'white') {
    console.log('White mode');

    $('#skip').addClass( "white-skip" );

  }
  else {
    console.log('Black mode');
  }

  sessionStorage.setItem("onboarding","1");
  changeLook(sessionStorage.getItem("onboarding"));

  function changeLook(x){
    switch (sessionStorage.getItem("onboarding")) {
      case '1':
          console.log('one');
          $('.onboarding-card').css("background-color", "#E5E5E5");
          $('.onboarding-card').css("background-image", "url('../images/onboarding1.svg')");
          $('.onboarding-card').css("background-position", "top 19vh center");
          $('.onboarding-card').css("background-size", "auto");

          $('.onboarding-card .onboarding').css('margin', '0 auto 1vh');
          $('.onboarding-card .text_1').css('margin', '0 auto');
          $('.onboarding-card .text_1').css('text-align', 'center');

          $('#back').css("display", "none");
          $('.send-button').css("display", "block");
          $('.lets-start').css("display", "none");

          $(".onboarding-card h2").text('Expanding your ideas');
          $(".onboarding-card p").html('I will help you create an idea or solution when a working dilemma arises. ');

          $( '.slider-item' ).slice( 1, 5).removeClass( 'slider-item_selected' );
        break;
      case '2':
          console.log('two');
          $('.onboarding-card').css("background-color", "#00A237");
          $('.onboarding-card').css("background-image", "url('../images/onboarding2.svg')");
          $('.onboarding-card').css("background-position", "top 13vh right 9vh");
          $('.onboarding-card').css("background-size", "auto");

          $('.onboarding-card .onboarding').css('margin', '0 0 1vh');
          $('.onboarding-card .text_1').css('margin', '0 0');
          $('.onboarding-card .text_1').css('text-align', 'left');

          $('#back').css("display", "block");
          $('.send-button').css("display", "block");
          $('.lets-start').css("display", "none");

          $(".onboarding-card h2").text('Open questions');
          $(".onboarding-card p").html('We will talk about your project.<br>There is no right answer on my questions :)');

          $( '.slider-item' ).slice( 1, 2).addClass( 'slider-item_selected' );
          $( '.slider-item' ).slice( 2, 5).removeClass( 'slider-item_selected' );
        break;
      case '3':
          console.log('three');
          $('.onboarding-card').css("background-color", "#1743B4");
          $('.onboarding-card').css("background-image", "url('../images/onboarding3.svg')");
          $('.onboarding-card').css("background-position", "top 17vh right 13vh");
          $('.onboarding-card').css("background-size", "auto");

          $('.onboarding-card .onboarding').css('margin', '0 0 1vh');
          $('.onboarding-card .text_1').css('margin', '0 0');
          $('.onboarding-card .text_1').css('text-align', 'left');

          $('#back').css("display", "block");
          $('.send-button').css("display", "block");
          $('.lets-start').css("display", "none");

          $(".onboarding-card h2").text('Poetic principles');
          $(".onboarding-card p").html('The game contains ambiguous questions that work with the imagination');

          $( '.slider-item' ).slice( 1, 3).addClass( 'slider-item_selected' );
          $( '.slider-item' ).slice( 3, 5).removeClass( 'slider-item_selected' );
        break;
      case '4':
          console.log('four');
          $('.onboarding-card').css("background-color", "#F5B2E7");
          $('.onboarding-card').css("background-image", "url('../images/onboarding4.svg')");
          $('.onboarding-card').css("background-position", "top 7vh right 16vh");
          $('.onboarding-card').css("background-size", "43%");

          $('.onboarding-card .onboarding').css('margin', '0 0 1vh');
          $('.onboarding-card .text_1').css('margin', '0 0');
          $('.onboarding-card .text_1').css('text-align', 'left');

          $('#back').css("display", "block");
          $('.send-button').css("display", "block");
          $('.lets-start').css("display", "none");

          $(".onboarding-card h2").text('20 minutes.');
          $(".onboarding-card p").html('You can complete the game<br>in just 20 minutes');

          $( '.slider-item' ).slice( 1, 4).addClass( 'slider-item_selected' );
          $( '.slider-item' ).slice( 4, 5).removeClass( 'slider-item_selected' );
        break;
      case '5':
          console.log('fife');
          $('.onboarding-card').css("background-color", "#7FD600");
          $('.onboarding-card').css("background-image", "url('../images/onboarding5.svg')");
          $('.onboarding-card').css("background-position", "top 9vh center");
          $('.onboarding-card').css("background-size", "auto");

          $('.onboarding-card .onboarding').css('margin', '39vh auto 1vh');
          $('.onboarding-card .text_1').css('margin', '0 auto');
          $('.onboarding-card .text_1').css('text-align', 'center');

          $('#back').css("display", "block");
          $('.send-button').css("display", "none");
          $('.lets-start').css("display", "block");

          $(".onboarding-card h2").text('Believe me.');
          $(".onboarding-card p").html("I don't store data.<br> And I don't use them.");

          $( '.slider-item' ).slice( 1, 5).addClass( 'slider-item_selected' );
        break;
      default:
    }
  }

  $( "#onboarding-send" ).click(function() {
    let new_slide = parseInt(sessionStorage.getItem("onboarding")) + 1;
    sessionStorage.setItem("onboarding",new_slide);
    changeLook(sessionStorage.getItem("onboarding"));
  })

  $( "#back" ).click(function() {
    let new_slide = parseInt(sessionStorage.getItem("onboarding")) - 1;
    sessionStorage.setItem("onboarding",new_slide);
    changeLook(sessionStorage.getItem("onboarding"));
  })

  $( ".send-button-mobile" ).click(function() {
    let new_slide = parseInt(sessionStorage.getItem("onboarding")) + 1;
    sessionStorage.setItem("onboarding",new_slide);
    changeLook_mobile();
  });

  let new_width = parseInt($( document ).width());
  let new_width_scroll = $('.swiper-scrollbar').width() / 5;
  console.log(new_width);

  function changeLook_mobile(){
    switch (sessionStorage.getItem("onboarding")) {
      case '2':
        $('.swiper-slide:nth-child(1)').addClass('swiper-slide-prev');
        $('.swiper-slide:nth-child(2)').addClass('swiper-slide-active');
        $('.swiper-slide:nth-child(3)').addClass('swiper-slide-next');
        console.log('case 2');
        new_width = new_width * (-1);
        console.log(new_width);
        $('.swiper-wrapper').css('transform', 'translate3d(' + new_width + 'px, 0px, 0px)');
        $('.swiper-scrollbar-drag').css('transform', 'translate3d(' + new_width_scroll + 'px, 0px, 0px)');
        break;
      case '3':
        $('.swiper-slide:nth-child(2)').addClass('swiper-slide-prev');
        $('.swiper-slide:nth-child(3)').addClass('swiper-slide-active');
        $('.swiper-slide:nth-child(4)').addClass('swiper-slide-next');
        console.log('case 3');
        new_width = (new_width + new_width);
        console.log(new_width);
        $('.swiper-wrapper').css('transform', 'translate3d(' + new_width + 'px, 0px, 0px)');
        $('.swiper-scrollbar-drag').css('transform', 'translate3d(' + new_width_scroll * 2 + 'px, 0px, 0px)');
        break;
      case '4':
        $('.swiper-slide:nth-child(3)').addClass('swiper-slide-prev');
        $('.swiper-slide:nth-child(4)').addClass('swiper-slide-active');
        $('.swiper-slide:nth-child(5)').addClass('swiper-slide-next');
        console.log('case 4');
        new_width = (new_width + new_width / 2);
        $('.swiper-wrapper').css('transform', 'translate3d(' + new_width + 'px, 0px, 0px)');
        $('.swiper-scrollbar-drag').css('transform', 'translate3d(' + new_width_scroll * 3 + 'px, 0px, 0px)');
        break;
      case '5':
        $('.swiper-slide:nth-child(4)').addClass('swiper-slide-prev');
        $('.swiper-slide:nth-child(5)').addClass('swiper-slide-active');
        console.log('case 5');
        new_width = new_width - parseInt($( document ).width());
        $('.swiper-wrapper').css('transform', 'translate3d(' + new_width  + 'px, 0px, 0px)');
        $('.swiper-scrollbar-drag').css('transform', 'translate3d(' + new_width_scroll * 4 + 'px, 0px, 0px)');
        break;
      default:

    }
  }


})
