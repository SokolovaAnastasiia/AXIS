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
      $( "a" )
        .removeClass( "black_text" )
      $( "a" )
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
          $(".button2_slide03")
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
          $( "a" )
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
        $(".mode_area3").removeClass("hidden");
        setTimeout(function(){
          $(".mode_area3").addClass("hidden");
        },1000)
        setTimeout(function(){
          $("#draggableArea").removeClass("hidden");
        },1700)
        setTimeout(function(){
          $(".idea_fix").removeClass("blocker");
        },1700)
        setTimeout(function(){
          $(".idea_fix").addClass("flex");
        },1750)
        setTimeout(function(){
          $(".slider_slide02, .mode_slide02, .drag_slide02, .mode_slide02_mobile, .drag_slide02_mobile").removeClass("hidden");
        },1700)
        setTimeout(function(){
          $(".mode_area3").addClass("blocker");
        },2500)
        setTimeout(function(){
          $(".mode_area3").addClass("back");
        },3500)
      });
    });

    $(document).ready(function(){
          $(".button_right").click(function(){
            $(".forbody")
              .removeClass( "forbody3" )
              .addClass( "forbody2" )
              .find( ".drag_slide02_mobile" )
                .html( "Black or White?" );
            $(".button2_slide03")
              .removeClass( "hidden" )
            $(".button_area_mobile4")
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
            $( "#draggable" )
              .removeClass( "right" )
            $( "#draggable" )
              .addClass( "left" )
            $( ".drag_slide02" )
              .addClass( "blocker" )
            $( ".button2_slide03" )
              .removeClass( "white_button" )
            $( ".mode_slide02" )
              .removeClass( "black_text" )
            $( ".mode_slide02" )
              .addClass( "white_text" )
            $( ".button_mobile" )
              .addClass( "white" )
            $( ".drag_slide02_mobile" )
              .removeClass( "black_text" )
            $( ".drag_slide02_mobile" )
              .addClass( "white_text" )
            $( ".button_mobile" )
            .find( "a" )
              .html( "Continue in black" )
              .removeClass( "white_button" )
            $( "a" )
              .removeClass( "white_text" )
            $( "a" )
              .addClass( "black_text" )
          });
        });

        $(document).ready(function(){
              $(".button_left").click(function(){
                $(".forbody")
                  .addClass( "forbody3" )
                  .find( ".drag_slide02_mobile" )
                    .html( "Black or White?" );
                    $(".slider_slide02")
                      .removeClass( "white" )
                    $(".slider_slide02")
                      .addClass( "black" )
                    $(".button_area_mobile4")
                      .removeClass( "hidden" )
                    $( "#draggable" )
                      .removeClass( "gray" )
                    $( "#draggable" )
                      .removeClass( "black" )
                    $( "#draggable" )
                      .addClass( "white" )
                    $( "#draggable" )
                      .removeClass( "left" )
                    $( "#draggable" )
                      .addClass( "right" )
                    $(".button2_slide03")
                      .removeClass( "hidden" )
                    $( ".drag_slide02" )
                      .addClass( "blocker" )
                    $( ".button_mobile" )
                      .removeClass( "white" )
                    $( ".button2_slide03" )
                      .addClass( "white_button" )
                    $( ".mode_slide02" )
                      .removeClass( "white_text" )
                    $( ".mode_slide02" )
                      .addClass( "black_text" )
                    $( ".drag_slide02_mobile" )
                      .removeClass( "white_text" )
                    $( ".drag_slide02_mobile" )
                      .addClass( "black_text" )
                    $( ".button_mobile" )
                      .addClass( "white_button" )
                      .find( "a" )
                        .html( "Continue in white" )
                    $( "a" )
                      .removeClass( "black_text" )
                    $( "a" )
                      .addClass( "white_text" )
              });
            });

            $(document).ready(function(){
                  $(".arrow1").click(function(){
                    $(".Dialogue_text2_gray").removeClass("hidden");
                    setTimeout(function(){
                      $(".area_arrow_2").removeClass("hidden");
                    },10)
                    setTimeout(function(){
                      $(".area_arrow_2").addClass("front");
                    },20)
                    setTimeout(function(){
                      $(".area_arrow_1").addClass("hidden");
                    },30)
                    setTimeout(function(){
                      $(".Dialogue2_text1_white").addClass("hidden");
                    },50)
                    setTimeout(function(){
                      $(".Dialogue2_text1_white").html("How are you today?");
                    },500)
                    setTimeout(function(){
                      $(".Dialogue2_text1_white").removeClass("hidden");
                    },1000)
                    setTimeout(function(){
                      $(".Dialogue_text3_white, .Dialogue_text3_gray").addClass("hidden");
                    },50)
                    setTimeout(function(){
                      $(".Dialogue_text3_white").html("I want to get to know you better...");
                    },500)
                    setTimeout(function(){
                      $(".Dialogue_text3_gray").html("Answer quickly");
                    },500)
                    setTimeout(function(){
                      $(".Dialogue_text3_white, .Dialogue_text3_gray").removeClass("hidden");
                    },1000)
                    setTimeout(function(){
                      $(".Dialogue_text4_white, .Dialogue_text4_gray, .Start_input_area").addClass("hidden");
                    },50)
                    setTimeout(function(){
                      $(".Dialogue_text4_white").html("If an idea does not exist, create it.");
                    },500)
                    setTimeout(function(){
                      $(".Dialogue_text4_white, .Start_text1_white, .Start_text1_gray").removeClass("hidden");
                    },1000)

                  });
                });

            $(document).ready(function(){
                  $(".arrow1_whitemode").click(function(){
                    $(".Dialogue_text2_gray").removeClass("hidden");
                    setTimeout(function(){
                      $(".area_arrow_2_whitemode").removeClass("hidden");
                    },10)
                    setTimeout(function(){
                      $(".area_arrow_2_whitemode").addClass("front");
                    },20)
                    setTimeout(function(){
                      $(".area_arrow_1_whitemode").addClass("hidden");
                    },30)
                    setTimeout(function(){
                      $(".Dialogue2_text1_white").addClass("hidden");
                    },50)
                    setTimeout(function(){
                      $(".Dialogue2_text1_white").html("How are you today?");
                    },500)
                    setTimeout(function(){
                      $(".Dialogue2_text1_white").removeClass("hidden");
                    },1000)
                    setTimeout(function(){
                      $(".Dialogue_text3_white, .Dialogue_text3_gray").addClass("hidden");
                    },50)
                    setTimeout(function(){
                      $(".Dialogue_text3_white").html("I want to get to know you better...");
                    },500)
                    setTimeout(function(){
                      $(".Dialogue_text3_gray").html("Answer quickly");
                    },500)
                    setTimeout(function(){
                      $(".Dialogue_text3_white, .Dialogue_text3_gray").removeClass("hidden");
                    },1000)
                    setTimeout(function(){
                      $(".Dialogue_text4_white, .Dialogue_text4_gray, .Start_input_area").addClass("hidden");
                    },50)
                    setTimeout(function(){
                      $(".Dialogue_text4_white").html("If an idea does not exist, create it.");
                    },500)
                    setTimeout(function(){
                      $(".Dialogue_text4_white, .Start_text1_white, .Start_text1_gray").removeClass("hidden");
                    },1000)

                  });
                });

            $(document).ready(function(){
                  $("input").click(function(){
                    $(".nicknames").addClass("hidden");
                    setTimeout(function(){
                      $(".name_button, .button_area_mobile4").removeClass("hidden");
                    },500)
                    setTimeout(function(){
                      $(".area_arrow_2_whitemode").addClass("front");
                    },20)
                    setTimeout(function(){
                      $(".area_arrow_1_whitemode").addClass("hidden");
                    },30)

                  });
                });
            $(document).ready(function(){
                  $(".Start_input_area").click(function(){
                    $(".area_arrow_1, .area_arrow_1_whitemode").removeClass("hidden2");


                  });
                });
              $(document).ready(function(){
                      $(".Start_input_area").click(function(){
                        $(".area_button_desktop").removeClass("hidden");
                      });
                    });
            $(document).ready(function(){
                  $(".boxer").click(function(){
                    $(".boxer").addClass("hidden");
                    setTimeout(function(){
                      $(".contenier_main").removeClass("hidden");
                    },500)
                  });
                });
