$(document).ready(function(){


  const question = [0,1,2,3];
  let questions = question.sort(() => Math.random() - Math.random()).slice(0, 3);
  sessionStorage.setItem('questions-interview', questions);

  // Задать цвет интерфейса
  $( ".button2_slide03, .button_mobile" ).click(function() {
    if ($( ".button2_slide03, .button_mobile" ).hasClass( "white_button" )) {
      sessionStorage.setItem("mode","white");
    }
    else {
      sessionStorage.setItem("mode","black");
    }
  })

  // Применить цвет интерфейса на экране
  if (sessionStorage.getItem("mode") == 'white') {
    console.log('White mode');

    // Пишешь элемент, к которому надо добавить класс с белым цветом
    $('body').addClass( "body_white" )
    $( ".primary_button" ).addClass( "primary_button_white" );
    $( ".secondary_button" ).addClass( "secondary_button_white" );
    $( ".slider-item" ).addClass( "slider_white" );
    $( 'h2' ).not('.onboarding').addClass( "h2_white" );
    $( '.yes_no_button' ).addClass( "yes_no_button_white" );
    $( '.caption' ).addClass( "caption_white" );
    $( 'input, .Start_input' ).addClass( "input-white" );
    $( '.forbody2' ).addClass( "forbody3" );
    $( '.Dialogue_text1_white, .Dialogue2_text1_white, .Dialogue_text3_white, .Dialogue_text4_white, .Start_text1_white' ).addClass( "black_text" );
    $( '.Dialogue_text2_gray, .Dialogue_text3_gray, .Dialogue_text4_gray, .Start_text1_gray' ).addClass( "gray_text" );
    $( '.area_arrow_1, .area_arrow_2' ).addClass( "hidden" );
    $( '.area_arrow_1, .area_arrow_2' ).addClass( "none" );
    $( '.area_arrow_1_whitemode, .area_arrow_2_whitemode' ).removeClass( "none" );
    $( '.area_arrow_1_whitemode' ).removeClass( "hidden" );
    $( '.name_button' ).removeClass( "black_button" );
    $( '.name_button' ).addClass( "white_button" );
    $( '.button_mobile' ).addClass( "black_button_mobile" );
    $( '.palka, .palka2' ).removeClass( "white_plus" );
    $( '.palka, .palka2' ).addClass( "black_plus" );
    $( '.chip' ).addClass( "white_chip" );
    $( '.sub-h2' ).addClass( "sub-h2_white" );
    $( '.corner' ).addClass( "corner_white" );
    $( '.message-input' ).addClass( "message-input-white" );
    $( '.message' ).addClass( "message-white" );
    $( '.send-button' ).addClass( "send-button-white" );
    $( '.level' ).addClass( "level-white" );
    $( '.question' ).addClass( "question-white" );


  }
  else {
    console.log('Black mode');
  }

})
