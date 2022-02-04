$("a.play").click(function (e) {
    e.preventDefault();
    var player = $('audio');
    var aplay = this;
    url = $(this).attr("href");
    source = player.find("source").attr("src");

    if(player[0].paused === false && source == url){
        player[0].pause();
        player[0].currentTime = 0;
        $("a.play > div").removeClass();
        $("a.play > div > span").css("opacity", 0);
        $("a.play > i").removeClass();
        $("a.play > i").addClass("fa fa-play");
    } else {
        player[0].pause();
        player[0].currentTime = 0;
        player.attr("src", url);
        player.find("source").attr("src", url);
        player[0].play();
        $("a.play > div").removeClass();
        $("a.play > div > span").css("opacity", 0);
        $("a.play > i").removeClass();
        $("a.play > i").addClass("fa fa-play");

        $(aplay).find('i').removeClass();
        $(aplay).find('i').addClass("fa fa-circle-o-notch fa-spin fa-3x fa-fw");

        player[0].onplaying = function() {
            duration = player[0].duration;
            $(aplay).find('i').removeClass();
            $(aplay).find('i').addClass("fa fa-stop");
            $(aplay).find('div').addClass("prgress");
            $(aplay).find('div > span').css("opacity", 1);
            $(aplay).find('div').css("animation-duration", duration + "s");
            //alert(duration);
        };

        player[0].onended = function() {
            $(aplay).find('div > span').css("opacity", 0);
            $(aplay).find('i').removeClass();
            $(aplay).find('i').addClass("fa fa-play");
        };
    }
    return false;
});

function toggle(obj) {

    var el = document.getElementById(obj);

    if ( el.style.maxHeight == '' || el.style.maxHeight == '0px' ) {

        el.style.display = 'block';
        el.style.opacity = '1';
        el.style.maxHeight = '1280px';
        el.style.transition = 'all .7s ease-in';

    }else {

        el.style.opacity = '0';
        el.style.maxHeight ='0';
        el.style.transition = 'all 0.4s ease-out';

    }

}
