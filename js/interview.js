$(document).ready(function(){

  const chips_list = [[
    'What elemental god would you be',
    'Water',
    'Fire',
    'Earth',
    'Air',
  ],
  [
    'What is your internal time horizon?',
    '30 years',
    '30 days',
    'week',
    'day',
    '2 hours',
    '15 minutes'
  ],
  [
    'What word fits the state of your creativity right now?',
    'Exuberant',
    'Manic',
    'Depleted',
    'Free',
    'Confined',
    'Balanced',
    'Focused',
    'Logical',
    'Deliberate',
    'On bass',
    'Stuck',
    'Expansive'
  ],
  [
    'Where does what you create come from? Choose a few',
    'Heart',
    'Truth',
  ]];

let questions_yes_no = [
  'Do you observant?',
  'Do you trust your intuition?',
  'Do you have own mythology?',
  'Are some questions confusing?',
  'Do you like to invent plots or stories?',
  'Are you talkative?',
]

let questions_text = [
  'If you could share one thing about yourself with the world, what would it be?',
  'What color is your mood this year?',
  'What has inspired you in the last month?',
  'Who were the yous before you were you now?',
  'What symbols appear consistently in your life? In few words',
  'What does the sky smell like today?',
  'What areas of you do you want to water today?',
  'How do you embody real, truth, joy, peace?',
  'What instrument are you and why?',
]

var yes_no_1 = questions_yes_no[Math.floor(Math.random()*questions_yes_no.length)];
$('#h2-interview1').html(yes_no_1);

var text_q = questions_text[Math.floor(Math.random()*questions_text.length)];
$('#h2-interview2').html(text_q);

let chipses = sessionStorage.getItem('questions-interview');

chipses = chipses.split(',');

$('#h2-interview3').html(chips_list[chipses[0]][0]);
first_arr = chips_list[chipses[0]].slice(1);
let first_arr_chips = $('#chips_1');
addChip(first_arr, first_arr_chips);

$('#h2-interview4').html(chips_list[chipses[1]][0]);
second_arr = chips_list[chipses[1]].slice(1);
let second_arr_chips = $('#chips_2');
addChip(second_arr, second_arr_chips);

$('#h2-interview5').html(chips_list[chipses[2]][0]);
third_arr = chips_list[chipses[2]].slice(1);
let third_arr_chips = $('#chips_3');
addChip(third_arr, third_arr_chips);


function addChip(arr, element) {
  arr.forEach(function(value) {
      var new_chip = $('<div class="chip"></div>');
      var new_chip_icon = $('<div class="icon"></div>');
      var new_chip_text = $('<div class="chip-text"></div>').text(value);
      new_chip.append(new_chip_icon);
      new_chip.append(new_chip_text);
      element.append(new_chip);
  });
}






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
