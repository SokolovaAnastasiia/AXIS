$(document).ready(function(){
  var input = document.querySelector('input'); // get the input element
  input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
  resizeInput.call(input); // immediately call the function

  function resizeInput() {
    this.style.width = this.value.length + "ch";
    if($('.desktop-input').val()) {
      $('#interview-2-yes-no-button').css("display", "block");
    }
    else {
      $('#interview-2-yes-no-button').css("display", "none");
    }
  }

  $( ".send-button" ).click(function() {
    $( ".send-button" ).toggleClass( "bounce" );
  })


})
