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
  'Imagine that inside the idea there is a “layering” of actions. Combine two actions into a third.',
  'How can you use “layering” in your idea? layering of content/shapes/sounds/cloudiness/hierarchy',
  'your idea 1) annually.. 2) monthly... 3) daily',
  'Your idea that is exposed...  ',
  'Your idea that encourages...',
  'Your idea that exists only inside...and outside...',
  'Describe the world of your idea. When writing, forget the last written word, continue the story from the penultimate',
  'What is the zodiac sign of your idea? Who / what is represented in the real or imaginary world as neighboring signs?',
  'How could your idea write its own history? What tools?',
  'If the instructions for your idea consisted only of adverbs about how you can use your idea?',
  'If your idea were to be posted on a wall, what would it be about? Where else could it be located?',
  'What is the main feeling of the idea? Imagine the length of this feeling as a segment, as a playlist. What would happen in this segment?',
  'What words would you use to bring chaos to the calm and order that is in the context of your idea?',
  'What words would you use to bring calm and order to the chaos that is in the context of your idea?',
  'What is your idea about? In a word. How does this word relate to smells, textures, colors, tastes? Try replacing these relationships with asymmetric',
  "Choose the most non-obvious words related to the idea so that the connection is clear only to you. Don't limit yourself to the number of words.",
  'Make the most asymmetrical descriptions out of 2 words. What could be the asymmetry? Word size? sound? Difference in one letter? Or something else?',
  'How is the word “radical” expressed in your idea? what phrases do you find in this word?',
  'Write down the words associated with the stages of human life. Apply them to the idea (growing up / crisis / rebellion / love / death / moving / education)',
  'Make some associations. Divide into groups of three words, let the extreme ones be connected by the central word. What if the word in the center becomes a verb? What are these unions? About what?',
  'How can your idea take care of a person? For example, did he eat well? Write at least 5 questions. What did you find?',
  'Imagine the world around as a set of qr codes of your idea. Where could they lead? What are these objects? What if the whole building or bridge becomes one code?',
  'How would you describe your idea if you were raising money as a homeless person? What would you write on the cardboard?',
  'Remember the document you know (summary / report / transcript / statement, etc.), how will your idea live inside any document?',
  'If everything will consist of a string?',
  'If everything will consist of conclusions?',
  'If everything will consist of an introduction?',
  'What influences? What is distanced from each other? What is involved?',
  'Idea to <br> Idea over <br> Idea under <br> Idea to <br> Idea to <br> Idea from <br> Idea to <br> Idea to <br> Idea to',
  'Your idea for (1. what) and (2. antonym of 1)',
  'How will an idea change in the rain?',
  'If an illiterate person with a small vocabulary would talk about your idea?',
  'Make a chain of actions from adverbs on the topics of the sound',
  'Find 4 lines of text in the space around you. Think of each word as a set of hyperlinks linked to each other. What did you find?',
  'Make a story out of prepositions and interjections',
  'What is the compositional introduction of your idea? Make the maximum number of impersonal sentences',
  'Imagine the idea as a performance. What could it be for? (use only cleaning verbs and psychology nouns) ',
  'What personality suits your idea? Why',
  '4 songs capable of taking the script in 4 different directions. Where are they heading?',
  'How is your idea experienced physically? 5 situations',
  'If your idea existed in the 1st century AD, how would it be implemented?',
  'Choose a political affiliation for the idea',
  'Write down an unlimited number of associations. distribute associations by game levels. in random quantities. using punctuation marks',
  'What can be done inside your idea in 3 verbs. Divide the verbs into 3 actions, as in the play. What happens in everyone.',
  'Why not let some animal take advantage of the idea. What actions would he take inside your idea?',
  'Describe the idea as a bad dream in 1 sentence. Does it look scary',
  'Write down 5 adverbs relevant to your idea from the classifications: biology/history/psychology/astrology/. What stories will you find?',
  'Remember the TV show. What scenario could tell about your idea?',
  'If your idea becomes a line, what modifications can it take? Go up? Become a time slice? bend over? Be the way? Write down at least 5 phrases or verbs',
  'Dialogue with which person would help you? Write down a list of his concepts and ideas about the world, in your opinion. Try to expand the list to new termsWatch one object around you. How is it similar to your idea? What is special about it?',
  'Find the last draft or note and insert new words',
  'Define the vocabulary of the idea. Maybe it is academic, maybe it consists of sharp words? Choose 3 distinctive features',
  'What verbs connect the main elements of your idea? Link them in biological terms',
  'How do the main elements of your idea interact? Connect them with adverbs from human relationships (interrupting, laughing, devaluing, entering into a dialogue, asking, etc.)'
];

level3 = [
  'Imagine that the slogan / name of the idea is subject to physical laws. For example, the word blows wiiiiiiiiiind or fog falls.',
  'Think of an idea as a set of addresses. How are addresses related?',
  'If your idea were a political candidate, what rhetoric would it use?',
  "Think like a textbook. What exercises can be there to understand your idea? Maybe it's physical practices, the scenario of the day, a new language?",
  'In which parts of your project can subtitles be inserted? Why?',
  'Describe the idea in one word. Let it become a new language. What is included in this language?',
  'A collective tool that changes itself through use',
  'Make 5 different chatbots for an idea. What will they talk about? What if you co-tune them with each other?',
  'Should I make the thing, or make the thing that makes the thing?',
  'Describe 10 ways you can get your message across beyond words?',
  'What instruments do you know? Separately replace their names with each other, how will they work with a new name?',
  'Try to talk about the idea using mouth sounds or the sounds of objects around',
  'Any sports or intellectual game. Write down the actions within the game. How does this apply to your idea?',
  'If you were creating an idea in a grocery store, what would you buy? Write a grocery list',
  'How can your idea exist in night mode? What other modes can she have? Passive-aggressive, secret, vertical, 360 degrees, routine, holiday? Find your',
  'What survival tools do you know? how can your idea be one of them?',
  'Create as many action buttons (pick up/hide) as you can using pronouns/interrogative constructions/interjections/adverbs of place',
  'What tools or ways of navigation can you use for your idea from the maps application?',
  'Translate a set of emoji into language',
  'Think of an idea as a dish. Use 9 different ways to serve the dish, deconstruct it. Choose a name for each using the letters from the name in any order and number. (You can only serve plates, one ingredient, etc.)',
  'Describe the idea in one word. Enter a word in the phone, let T9 continue',
  'Rearrange the letters in the word randomly 5 times. If every word could be a music track, what would each word be about',
  'Write a technical instruction. A practical guide on how to...',
  'Pick one option on your phone that matches your idea. Can you make this customization your slogan? Expand the list of options for this setting',
  'Write down an unlimited number of actions from an irrelevant area. For example, construction (erect, chop, dig, heap, saw) Distribute actions using punctuation marks. So you created a series of tools to visualize an idea.',
  'Think of any natural phenomenon. How would that change your idea? Wet/tear/stretch/deflate. Write down the phenomenon and 5 verbs. How to turn the consequences of deformation into an artistic image?',
  "Why don't you remake the name of a famous brand but make it sound like what it would be?",
  "Write a line of random words. Insert a few lines into it because|it's all|flowersor|it's|you're reading and try to find new words or shapes",
  'Write down 5 associations. How do you divide them into rooms, one by one or in groups, using punctuation marks. What are the functions of the rooms? What walls? What area? What other forms can punctuation marks take?',
  'Think about the actions that take place within your idea. If you planted them like a garden bed, which ones would give the most shoots? After what time?',
  'If each part that makes up the idea were located on the map, then at what distances would they be between each other? Would they have fences or paths?',
  'Find one instrument with which you execute the idea. Write in verbs what you do with it, and then find several variations for each of them'
];

level4 = [
  'Imagine that your idea cannot have visual content. What phrases would you use to describe the possible images?',
  'Describe the style of your idea. Curvy / sweeping / with big loops? Try to transfer this description to the nature of the visual / tactile or auditory form of your idea.',
  'Describe the idea without using words ',
  'Describe the idea in a series of playlist titles. Think about when it is better to include them, what is included in them?',
  'What materials and textures does your idea consist of? Write a list and think about how each item can become a standalone piece ',
  'What means of expression could your idea interact with? Come up with your own ways, they can be very simple or, on the contrary, complex (Allegory / Alliteration / Anaphora / Assonance / Hyperbole / Gradation / Metaphor, etc.)',
  'Imagine the idea as a set of playlists that can include not only music, but also objects / people / locations / smells, etc. What would be contained in each “folder”?',
  'What gradients suit the idea? Humidity / shades / smells / tempo / tonality, etc. Write at least 5. Why them?',
  'Find something ordinary. Find depth. How to connect it with your task?',
  'Your slogan. Duplicate it line by line, let it fade out.',
  'If the idea was turned to trees. <br> Write a love letter to it. <br> To: <br> Message:',
  'Imagine it as a garden. What are the boundaries of this? What is growing? What colors? What time of day is predominant? ',
  'Add one mistake',
  'What transformation is relevant? Why? Idea flipped/tilted/rotated 180/rotated 90/rotated 360/flip horizontal/flip vertical..you can go on with the list',
  "What can be 'everything' in your project?",
  'How does the word ‘other’ exist in your idea?',
  "What can be 'nothing' in your project? ",
  "What could be the ‘emptiness’ in your project?",
  'Create three intonations for your idea using adjectives from the field of physics',
  'Imagine the idea as a flower growing out of the ground. Name each element according to the idea <br> What kind of flower is it? Stem? Leaves? Petals? What kind of sun?',
  'Which zodiac sign would suit your idea? Why?',
  'What is the coldest?',
  'What is the warmest?',
  'Write any symbols of the idea in the column. Colour? Smell? What symbols are stronger? Which harmonize each other? Which ones are denied? Create a symbol hierarchy.',
  'Can the idea function as an album of remixes, loops and samples? What sounds will this collection consist of? Describe with adjectives',
  'Imagine an idea like a set of notes in perfumery. Which project element applies to each note? <br> Woody / Citrus / Floral / Oriental / Marine / Green',
  'Describe the idea as a mix of tracks. What is his development? What sounds prevail?',
  'What if [insert idea field] is not [insert idea field]? ',
  'Minor or Major? Think of the order of musical tones as the script for your idea.',
  '......Create........... <br> ..........................a field................ <br> of.........association..................to your..................idea....',
  'Five sounding textures (for example, rustling). How can they make your idea better?',
  'Collect an archive of phrases for your idea from conversations in instant messengers',
  'How would it function in the human body if it is a new organ? what organ suits your idea?',
  'Four different names for the planets or constellations that your scenario could govern.',
  'Remember one picture. In what properties does it resemble your idea?',
  'What tactile sensations would you be able to explain the idea? Braille? natural textures? Fabrics?',
  "Why don't you divide the idea into several vegetable gardens and take care of each one differently? And if you impose one garden on another? What will grow?",
  'Think of all kinds of directories (from telephone to medical) that you know. If one of them falls into your context, then what kind of table of contents would there be? Make a long list',
  'Imagine the idea as a new solar system. What are the nebulae in it? Distances? Number and shape of planets? Planet names? How do they fly? How to apply it practically?',
  'Apply the idea to an imaginary landform or city. What is the climate, architecture? What navigation?'
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
      $(".primary_button a").attr("href", "map.html");
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
