$(document).ready(function(){

  $( ".send-button" ).click(function() {
    $( ".send-button" ).toggleClass( "bounce" );
  })

  $( ".chip" ).click(function() {
    $(this).toggleClass( "chosen-chip" );
    $(this).children( ".icon" ).toggleClass( "chosen-icon" );
  })

  $('.chip').bind('click', function(){
    var x = $('.chip').index(this);

    switch (x) {
      case 0:
        $(this).toggleClass('chip-0');
        break;
      case 1:
        $(this).toggleClass('chip-1');
        break;
      case 2:
        $(this).toggleClass('chip-2');
        break;
        case 3:
          $(this).toggleClass('chip-3');
          break;
          case 4:
            $(this).toggleClass('chip-4');
            break;
            case 5:
              $(this).toggleClass('chip-5');
              break;
              case 6:
                $(this).toggleClass('chip-6');
                break;
                case 7:
                  $(this).toggleClass('chip-7');
                  break;
                  case 8:
                    $(this).toggleClass('chip-8');
                    break;
                    case 9:
                      $(this).toggleClass('chip-9');
                      break;
                      case 10:
                        $(this).toggleClass('chip-10');
                        break;
                        case 11:
                          $(this).toggleClass('chip-11');
                          break;
      default:
    }
});

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


})
