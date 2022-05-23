$(document).ready(function(){
document.getElementsByClassName('messages')[0].scrollTop = document.getElementsByClassName('messages')[0].scrollHeight;

level1 = [
  'What are the alter-ego / meta-ego / post-ego / micro-ego / macro-ego, etc. of an idea and how do they manifest themselves?',
  'Your project introduces a new letter to the alphabet. How? What for? Why? Where is it used?',
  'Describe the idea through a classification, using a biological example (kingdom / type / class / order / family / genus / species / subspecies), but within your own sphere. Try to deepen and expand the list as much as possible. You can give the levels of the hierarchy new names.',
  'Write a manifesto in 10 words (you can make phrases). Use words: fuck / be / make / use',
  'Describe an idea as (property) > (property)',
  'How are the words love, good, evil, man, world revealed in your idea?',
  'Think of an idea as a list of hyperlinks with headings and subheadings. Write this list without limiting yourself to chapters',
  'Alphabet your idea through emoji',
  'An idea from the point of view of logic, aesthetics, ideology',
  'Choose the longest words from 8 or more characters as tags for your idea',
  'Try to describe the idea in a way that hides its true purpose or content.',
  'Choose a word from an advertisement or sign. Google Translate into another language. This is your tag',
  'The (idea) is just another _',
  'Write the associations in a row, creating a pattern out of them',
  'Present the idea as an abbreviation. Decipher ',
  'In what system of measurements could your idea live? <br> (degrees/millimeters/minutes/coordinates) Why?',
  'Describe the idea in one word. Narrow the word down to a micro scale. What could it be?',
  'Describe the idea in one word. Inflate the word to macro scale. What could it be?',
  'Come up with a new gender for the idea. Give a name',
  'What gender is your idea? Why?',
  'Come up with your own micro-genre for the idea: -ism / -post / -meta / -punk / -core / -dub, etc. Describe its main properties',
  'What does an idea do? Form 3 tones from this action by choosing associative verbs: quiet / moderate / loud',
  'What difficulties will you encounter? Write nouns. Add to them five adjectives that neutralize the word.',
  'What do you know about physical laws? Weather / Movement / The structure of the universe? How would your idea be described by these properties?',
  'Try to combine several genres from any field for your idea',
  '1) Write down one name of the definition / concept that fits your idea <br> 2) Divide the definition into two key components <br> 3) Divide each component into two components again <br> 4) Add one association to the final words',
  'This is not [   ] <br> This is not [   ] <br> This is not [   ] <br> This is not [   ] <br> This is not [   ] <br> This is  ',
  'Prepare your research. Create a list of suggested archives. Be sure to use the name of the person / feeling / direction of philosophy / action / sound for marking',
  "Why don't you look at the idea as something that exists in the 23rd century? How would you be understood in these times?",
  'If your idea can become a texture or material and be embodied only in this format. How could this matter tell about itself?',
  'Present the shape of your idea. Squeeze it / subtract some chunks',
  'What word or property would you ban?',
  'Imagine writing a dissertation on your idea. What is the smallest subject you would explore in your context? Give the title of the dissertation',
  'Which brand or movie slogan suits your context? Match it to one of the elements or group of elements of your idea',
  'Which emoji is suitable for the idea? Write a detailed description',
  'Focus on one minor property of an idea. From it, form a chain of properties, where each is stronger than the previous one.',
  "Look for elements in the idea that you can't control or explain. Find the chaotic",
  'Find elements in the idea that keep the idea stable. Something unchanging, bringing order',
  'Find elements in the idea that have a tendency to develop the idea further and wider. Some transforming links ',
  'Write down 5 elements of the idea. What are they doing? Classify actions (mental, physical, emotional, natural, etc.) Try to rearrange elements and actions. play',
  'What obsolete word that has gone out of use is relevant in your context? ',
  'What is the tone of voice for your idea? Or is she silent?',
  'What color is your idea? What elements of the idea are most consistent with this color? What are the elements of a similar shade? ',
  'Think of one shape that fits your idea. What physical objects can it become?',
  'Choose a key definition for your idea. Write down 3 verbs and 3 nouns for the concept. Find 3 completely unrelated verbs and nouns to them. What is this new area?',
];

level2 = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

level3 = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

level4 = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

let q = [];

  sessionStorage.setItem("question","1");

  switch (sessionStorage.getItem("level")) {
    case '1':
      $(".primary_button a").attr("href", "level2.html");
      q = level1.sort(() => Math.random() - Math.random()).slice(0, 5);
      $('.level').html('01 —  DNA');
      $('.caption').html('01 —  DNA');
      break;
    case '2':
      $(".primary_button a").attr("href", "level3.html");
      q = level2.sort(() => Math.random() - Math.random()).slice(0, 5);
      $('.level').html('02 — Story');
      $('.caption').html('02 — Story');
      break;
    case '3':
      $(".primary_button a").attr("href", "level4.html");
      q = level3.sort(() => Math.random() - Math.random()).slice(0, 5);
      $('.level').html('03 — Tools');
      $('.caption').html('03 — Tools');
      break;
    case '4':
      $(".primary_button a").attr("href", "end.html");
      q = level4.sort(() => Math.random() - Math.random()).slice(0, 5);
      $('.level').html('04 — Poetry');
      $('.caption').html('04 — Poetry');
      break;
    default:
  }

  console.log(q);



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
        if ($(window).width() < 414) {
          $('.message-input').css('display', 'none');
          $('.primary_button').css('display', 'flex');
          $('.add-more').css('display', 'block');
          $('.send-it').css('display', 'none');
        }
        break;
      default:
        $('.primary_button').css('display', 'block');
        $('.secondary_button').css('display', 'none');
        if ($(window).width() < 414) {
          $('.message-input').css('display', 'none');
          $('.primary_button').css('display', 'flex');
          $('.add-more').css('display', 'block');
          $('.send-it').css('display', 'none');
        }
        break;

    }
    sessionStorage.setItem("question",new_page);
  }

$(document).on( "click", ".add-more", function(){
  $('.primary_button').css('display', 'none');
  $('.message-input').css('display', 'block');
  $('.add-more').css('display', 'none');
  $('.send-it').css('display', 'block');
});


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
