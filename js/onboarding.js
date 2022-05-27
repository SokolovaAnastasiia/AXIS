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

  document.addEventListener('swiped', function(e) {
      console.log(e.target); // the element that was swiped
      console.log(e.detail.dir);
      alert('wefwfe') // swiped direction
  });

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

  $('body').bind('htmlchanged', function (e, data) {
      alert('hi')
  });

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
          $('.onboarding-card').css("background-color", "#015924");

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
          $('.onboarding-card').css("background-color", "#595957");

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

          $('#back').css("display", "block");
          $('.send-button').css("display", "none");
          $('.lets-start').css("display", "block");

          $(".onboarding-card h2").text('Believe me.');
          $(".onboarding-card p").html("I don't store data. And I don't use them.");

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


})
