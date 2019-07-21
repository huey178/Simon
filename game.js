var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];


var level = 0;

var gpat =0;
var d;


function nextsequence(){
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() *4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
playSound(randomChosenColor);
}



$(".btn").click(function (){
  var clicked = $(this).attr("id");
userClickedPattern.push(clicked);
playSound(clicked);
checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  $("#"+name).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);

}

var press = false;
$(document).keypress(function(){
  if(!press){
    press = true;
    nextsequence();
  }
});


function checkAnswer(currentLevel){

if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
  if(userClickedPattern.length === gamePattern.length){
  setTimeout(function(){
    nextsequence();}, 1000);
  }
} else {
  var wrong = new Audio("sounds/wrong.mp3");
  wrong.play();
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
  startOver();
}


}

function startOver(){
  level = 0;
  gamePattern = [];
  press = false;
}
