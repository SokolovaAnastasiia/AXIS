$(document).ready(function(){

  // Задать цвет интерфейса
  $( ".button2_slide03" ).click(function() {
    if ($( ".button2_slide03" ).hasClass( "white_button" )) {
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


  }
  else {
    console.log('Black mode');
  }

})
