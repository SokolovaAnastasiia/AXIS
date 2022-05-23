$(document).ready(function(){
document.getElementsByClassName('messages')[0].scrollTop = document.getElementsByClassName('messages')[0].scrollHeight;

  // sessionStorage.setItem("level","1");
  sessionStorage.setItem("question","1");

  const q = ['first q', 'second q', '3q', '4q', '5q'];
  $('.question .text').html(q[0]);




  function nextQuestion(new_page){
    new_page = Number(sessionStorage.getItem("question")) + 1;
    switch (new_page) {
      case 2:
        $('.slider-item:nth-child(2)').addClass('slider-item_selected');
        $('.question .text').html(q[1]);
        break;
      case 3:
        $('.slider-item:nth-child(2)').next().addClass('slider-item_selected');
        $('.question .text').html(q[2]);
        break;
      case 4:
        $('.slider-item:nth-child(2)').next().next().addClass('slider-item_selected');
        $('.question .text').html(q[3]);
        break;
      case 5:
        $('.slider-item:nth-child(2)').next().next().next().addClass('slider-item_selected');
        $('.question .text').html(q[4]);
        break;
      case 6:
        $('.primary_button').css('display', 'block');
        $('.secondary_button').css('display', 'none');
        break;

      default:
    }
    sessionStorage.setItem("question",new_page);
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

  $( ".secondary_button" ).click(function() {
    addMessage();
  })

  $( ".send-button" ).click(function() {
    addMessage();
  })



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

      nextQuestion();
    }
  }

  $('.message-input').on('input', function() {
    if($('.message-input').val()) {
      $('.send-button').addClass('send-button-ready');
    }
    else {
      $('.send-button').removeClass('send-button-ready');
    }
  });

  $(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      addMessage();
      $(".message-input").blur();
    }
  });


})
