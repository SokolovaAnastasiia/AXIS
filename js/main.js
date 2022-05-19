$(document).ready(function(){

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
    $( 'h2' ).addClass( "h2_white" );
    $( '.yes_no_button' ).addClass( "yes_no_button_white" );
    $( '.caption' ).addClass( "caption_white" );
    $( 'input' ).addClass( "input-white" );
    $( '.forbody2' ).addClass( "forbody3" );
    $( '.Dialogue_text1_white' ).addClass( "black_text" );
    $( '.Dialogue_text2_gray' ).addClass( "gray_text" );
    $( '.area_arrow_1, .area_arrow_2' ).addClass( "hidden" );
    $( '.area_arrow_1, .area_arrow_2' ).addClass( "none" );
    $( '.area_arrow_1_whitemode, .area_arrow_2_whitemode' ).removeClass( "none" );
    $( '.area_arrow_1_whitemode' ).removeClass( "hidden" );


  }
  else {
    console.log('Black mode');
  }

})
