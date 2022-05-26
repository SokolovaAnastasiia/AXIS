$(document).ready(function(){

  const chips_list = [[
    'What elemental god would you be',
    'Water',
    'Fire',
    'Earth',
    'Air',
  ],
  [
    'cc1',
    'cc2',
    'cc3',
  ],
  [
    'ccc1',
    'ccc2',
    'ccc3',
  ],
  [
    'cccc1',
    'cccc2',
    'cccc3',
  ]];

let chipses = sessionStorage.getItem('questions-interview');

console.log(chipses);

console.log(chips_list[chipses[0]]);
console.log(chips_list[chipses[1]]);



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

  var textarea = document.querySelector('.message-input');
  textarea.addEventListener('keydown', autosize);
  function autosize(){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:24px; padding:0';
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  }

  $( ".send-button" ).click(function() {
    addMessage();
    $('.message-box').css('display','none');
    $('.next-button').css('display','flex');
  })

  $(document).keypress(function(event){
    $(".message-input").focus();
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      addMessage();
      $('.message-input').val('');
      $(".message-input").blur();
      $('.message-box').css('display','none');
      $('.next-button').css('display','flex');
    }
  });

  function addMessage() {
    value = $(".message-input").val();
    if (value != "") {
      $('.message-input').val('');
      $('.message-input').css('height','auto');
      if (sessionStorage.getItem("mode") == 'white') {
        var new_message = $("<div class='message message-white'></div>").text(value);
      }
      else {
        var new_message = $("<div class='message'></div>").text(value);
      }

      $('.messages').append(new_message);
      document.getElementsByClassName('messages')[0].scrollTop = document.getElementsByClassName('messages')[0].scrollHeight;

    }
  }


})
