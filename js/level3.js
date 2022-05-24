$(document).ready(function(){

  sessionStorage.setItem("level","3");

  if (sessionStorage.getItem("mode") == 'white') {
    $(".game-text-desktop").attr("src","../images/game-text_white3.svg");
  }

  $('.link').click(function() {
    sessionStorage.setItem("question","1");
  })

  $(".left-bottom-corner").on({
    mouseenter: function () {
      $( "#array-left" ).css('display', 'block');
      $( "#array-bottom" ).css('display', 'block');
      $( ".game-text-desktop" ).css('display', 'block');
      if (sessionStorage.getItem("mode") == 'white') {
        $('.right-bottom-corner').css( {borderLeft: '2px solid black'});
        $('.left-top-corner').css( {borderBottom: '2px solid black'});
      }
      else {
        $('.right-bottom-corner').css( {borderLeft: '2px solid white'});
      }
    },
    mouseleave: function () {
      $( "#array-left" ).css('display', 'none');
      $( "#array-bottom" ).css('display', 'none');
      $( ".game-text-desktop" ).css('display', 'none');
      if (sessionStorage.getItem("mode") == 'white') {
        $('.right-bottom-corner').css( {borderLeft: '2px solid #CCCCCC'});
        $('.left-top-corner').css( {borderBottom: '2px solid #CCCCCC'});
      }
      else {
        $('.right-bottom-corner').css( {borderLeft: '2px solid #111111'});
      }
    }
});

})
