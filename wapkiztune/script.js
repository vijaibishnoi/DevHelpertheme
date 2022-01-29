function mymenu(){
    $(".mobilemenuicon").css("display","none");
    $(".search-mobile").css("display","block");
}

     
     console.log("here");

function arktest(id,input){
var timer;
var percent = 0;
var audio = document.getElementById("audio"+id);
var attr=$("#audio"+id).attr("src");
if (typeof attr !== typeof undefined && attr !== false) {
}else{
$("#audio"+id).attr("src",$("#audio"+id).attr('data-src'));
    
}
audio.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;

  advance(duration, audio);
});
audio.addEventListener("pause", function(_event) {
  clearTimeout(timer);
});
var advance = function(duration, element) {
  var progress = document.getElementById("progress"+id);
  increment = 10/duration
  percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent+'%'
  startTimer(duration, element);
}
var startTimer = function(duration, element){ 
  if(percent < 100) {
      var seconds = Math.round(audio.currentTime) % 60;
var foo = Math.round(audio.currentTime) - seconds;
var minutes = foo / 60;
if(seconds < 10){
    seconds = "0" + seconds.toString();
}
var fixedCurrentTime = minutes + ":" + seconds;

   var aseconds = Math.round(audio.duration) % 60;
var afoo = Math.round(audio.duration) - aseconds;
var aminutes = afoo / 60;
if(aseconds < 10){
    aseconds = "0" + aseconds.toString();
}
var afixedCurrentTime = aminutes + ":" + aseconds;


        $("#timercurrent"+id).html(fixedCurrentTime+"/"+afixedCurrentTime);
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}


   var audios = document.getElementsByClassName("audio");
     for(i=0; i<audios.length; i++) {
       var celemt=  document.getElementById("audio"+id);
                 if(celemt != audios[i]){
         audios[i].pause();
                 }
     }
     
     
     
     
     
    
   if (!audio.paused) {
    audio.pause();
      $(".ringtone"+id).removeClass('fa-pause');
   $(".ringtone"+id).addClass('fa-play');
    isPlaying = false;
  } else {
         $(".ringbutton").removeClass('fa-pause');
   $(".ringbutton").addClass('fa-play');
   $(".ringtone"+id).removeClass('fa-play');
   $(".ringtone"+id).addClass('fa-pause');
   

    audio.play();
    isPlaying = true;
    
  }
  
  
  
    
}

var ark=0;
function menu(){
    if(ark==0){
        ark=1;
        $("#menuMainArk").addClass("fa-times");
          $("#menuMainArk").removeClass("fa-bars");
          $(".mobileCats").css("display","block");
    }else{
        $("#menuMainArk").removeClass("fa-times");
          $("#menuMainArk").addClass("fa-bars");
          $(".mobileCats").css("display","none");
        ark=0;
    }
}


