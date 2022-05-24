$(document).ready(function(){

  sessionStorage.setItem("level","2");

  if (sessionStorage.getItem("mode") == 'white') {
    $(".game-text-desktop").attr("src","../images/game-text_white2.svg");
  }

  $('.link').click(function() {
    sessionStorage.setItem("question","1");
  })

  $(".right-top-corner").on({
    mouseenter: function () {
      $( "#array-top" ).css('display', 'block');
      $( "#array-right" ).css('display', 'block');
      $( ".game-text-desktop" ).css('display', 'block');
      if (sessionStorage.getItem("mode") == 'white') {
        $('.left-top-corner').css( {borderRight: '2px solid black'});
        $('.right-bottom-corner').css( {borderTop: '2px solid black'});
      }
      else {
        $('.left-top-corner').css( {borderRight: '2px solid white'});
      }
    },
    mouseleave: function () {
      $( "#array-top" ).css('display', 'none');
      $( "#array-right" ).css('display', 'none');
      $( ".game-text-desktop" ).css('display', 'none');
      if (sessionStorage.getItem("mode") == 'white') {
        $('.left-top-corner').css( {borderRight: '2px solid #CCCCCC'});
        $('.right-bottom-corner').css( {borderTop: '2px solid #CCCCCC'});
      }
      else {
        $('.left-top-corner').css( {borderRight: '2px solid #111111'});
      }
    }
});

})
