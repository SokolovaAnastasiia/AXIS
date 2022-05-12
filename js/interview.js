$(document).ready(function(){
  var input = document.querySelector('input'); // get the input element
  input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
  resizeInput.call(input); // immediately call the function

  function resizeInput() {
    this.style.width = this.value.length + "ch";
    if($('#interview2-yes_no_button').val()) {
      $('#interview-2-yes-no-button').css("display", "block");
    }
  }

  $( ".send-button" ).click(function() {
    $( ".send-button" ).toggleClass( "bounce" );
  })


})
