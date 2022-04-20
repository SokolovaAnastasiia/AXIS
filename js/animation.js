$( function() {
  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $(".forbody")
        .removeClass( "forbody3" )
        .addClass( "forbody2" )
        .find( ".twxt" )
          .html( "Black" );
      $(".button2_slide03")
        .removeClass( "hidden" )
      $(".slider_slide02")
        .removeClass( "black" )
      $(".slider_slide02")
        .addClass( "white" )
      $( "#draggable" )
        .removeClass( "gray" )
      $( "#draggable" )
        .removeClass( "white" )
      $( "#draggable" )
        .addClass( "black" )
      $( ".twxt" )
        .removeClass( "hidden" )
      $( ".twxt" )
        .removeClass( "black_text" )
      $( ".twxt" )
        .addClass( "white_text" )
      $( ".drag_slide02" )
        .addClass( "blocker" )
      $( ".button2_slide03" )
        .removeClass( "white_button" )
      $( ".mode_slide02" )
        .removeClass( "black_text" )
      $( ".mode_slide02" )
        .addClass( "white_text" )
    }
  });
} );

$( function() {
  $( "#draggable" ).draggable();
  $( "#droppable2" ).droppable({
    drop: function( event, ui ) {
      $(".forbody")
        .addClass( "forbody3" )
        .find( ".twxt" )
          .html( "White" );
          $(".slider_slide02")
            .removeClass( "white" )
          $(".slider_slide02")
            .addClass( "black" )
          $( "#draggable" )
            .removeClass( "gray" )
          $( "#draggable" )
            .removeClass( "black" )
          $( "#draggable" )
            .addClass( "white" )
          $( ".twxt" )
            .removeClass( "hidden" )
          $( ".twxt" )
            .removeClass( "white_text" )
          $( ".twxt" )
            .addClass( "black_text" )
          $( ".drag_slide02" )
            .addClass( "blocker" )
          $( ".button2_slide03" )
            .addClass( "white_button" )
          $( ".mode_slide02" )
            .removeClass( "white_text" )
          $( ".mode_slide02" )
            .addClass( "black_text" )
    }
  });
} );

$(function() {
$("#draggable").draggable({
  containment: "#draggableArea"
});
});

$(document).ready(function(){
      $(".button1_slide01").click(function(){
        $(".button1_slide01").addClass("hidden");
        setTimeout(function(){
          $("#draggableArea, .slider_slide02, .mode_slide02, .drag_slide02").removeClass("hidden");
        },500)
        setTimeout(function(){
          $(".button1_slide01").addClass("blocker");
        },500)
      });
    });
