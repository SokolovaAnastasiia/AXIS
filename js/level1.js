$(document).ready(function(){

  sessionStorage.setItem("level","1");
  
  if (sessionStorage.getItem("mode") == 'white') {
    $(".game-text-desktop").attr("src","../images/game-text_white.svg");
  }

  $('.link').click(function() {
    sessionStorage.setItem("question","1");
  })

  $(".left-top-corner").on({
    mouseenter: function () {
      $( "#array-left" ).css('display', 'block');
      $( "#array-top" ).css('display', 'block');
      $( ".game-text-desktop" ).css('display', 'block');
      if (sessionStorage.getItem("mode") == 'white') {
        $('.right-top-corner').css( {borderLeft: '2px solid black'});
        $('.left-bottom-corner').css( {borderTop: '2px solid black'});
      }
      else {
        $('.right-top-corner').css( {borderLeft: '2px solid white'});
      }
    },
    mouseleave: function () {
      $( "#array-left" ).css('display', 'none');
      $( "#array-top" ).css('display', 'none');
      $( ".game-text-desktop" ).css('display', 'none');
      if (sessionStorage.getItem("mode") == 'white') {
        $('.right-top-corner').css( {borderLeft: '2px solid #CCCCCC'});
        $('.left-bottom-corner').css( {borderTop: '2px solid #CCCCCC'});
      }
      else {
        $('.right-top-corner').css( {borderLeft: '2px solid #111111'});
      }
    }
});

})
