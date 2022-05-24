$(document).ready(function(){

  sessionStorage.setItem("level","4");

  if (sessionStorage.getItem("mode") == 'white') {
    $(".game-text-desktop").attr("src","../images/game-text_white4.svg");
  }

  $('.link').click(function() {
    sessionStorage.setItem("question","1");
  })

  $(".right-bottom-corner").on({
    mouseenter: function () {
      $( "#array-right" ).css('display', 'block');
      $( "#array-bottom" ).css('display', 'block');
      $( ".game-text-desktop" ).css('display', 'block');
      if (sessionStorage.getItem("mode") == 'white') {
        $('.right-top-corner').css( {borderBottom: '2px solid black'});
        $('.left-bottom-corner').css( {borderRight: '2px solid black'});
      }
      else {
        $('.right-top-corner').css( {borderBottom: '2px solid white'});
      }
    },
    mouseleave: function () {
      $( "#array-right" ).css('display', 'none');
      $( "#array-bottom" ).css('display', 'none');
      $( ".game-text-desktop" ).css('display', 'none');
      if (sessionStorage.getItem("mode") == 'white') {
        $('.right-top-corner').css( {borderBottom: '2px solid #CCCCCC'});
        $('.left-bottom-corner').css( {borderRight: '2px solid #CCCCCC'});
      }
      else {
        $('.right-top-corner').css( {borderBottom: '2px solid #111111'});
      }
    }
});

})
