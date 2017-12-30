baidufn = function(){
    
    player = new YT.Player('baidurobot', {
        videoId: 'CoGXbPOUYKI',
        playerVars: {
            autoplay: 1,            // Auto-play the video on load
            controls: 0,            // Show pause/play buttons in player
            showinfo: 0,            // Hide the video title
            modestbranding: 1,      // Hide the Youtube Logo
            fs: 1,                  // Hide the full screen button
            cc_load_policy: 0,      // Hide closed captions
            iv_load_policy: 3,      // Hide the Video Annotations
            start: 48,
            end: 60,
            autohide: 0,            // Hide video controls when playing
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onStateChange
        }
    });

    function onPlayerReady(event) {
        setTimeout(function() {
            $('#baidudiv iframe').css({opacity:'0',transition:'.5s ease all'});
        }, 11990);
        event.target.playVideo();
        event.target.mute();
        event.target.setPlaybackQuality('hd1080');
    }

    //repload the video when onStateChange=YT.PlayerState.ENDED)
    function onStateChange(state) {
        if (state.data === YT.PlayerState.ENDED) {
            $('#baidudiv iframe').css({opacity:'1',transition:'.5s ease all'});
            setTimeout(function() {
                $('#baidudiv iframe').css({opacity:'0',transition:'.5s ease all'});
            }, 11490);
            player.seekTo(48);
            
        }
    }
}