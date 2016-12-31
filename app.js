function init(debug) {
    var track = {
        tempo: 135
    
      , tracks: {
            Kick: [
                1, 0, 0, 0, 1, 0, 0, 0
              , 1, 0, 0, 0, 1, 0, 0, 0
              , 1, 0, 0, 0, 1, 0, 0, 0
              , 1, 0, 0, 0, 1, 0, 0, 0
            ]
    
          , Hats: [
              , 0, 0, 1, 0, 0, 0, 1, 0
              , 0, 0, 1, 0, 0, 0, 1, 1
              , 0, 0, 1, 0, 0, 0, 1, 0
              , 0, 0, 1, 0, 0, 0, 1, 0 
            ]
    
          , Clap: [
                0, 0, 0, 0, 1, 0, 0, 0
              , 0, 0, 0, 0, 1, 0, 0, 0
              , 0, 0, 0, 0, 1, 0, 0, 0
              , 0, 0, 0, 0, 1, 0, 0, 0
            ]
    
          , Bass: [
                36, 0,38,36,36,38,41, 0
              , 36,60,36, 0,39, 0,48, 0
              , 36, 0,24,60,40,40,24,24
              , 36,60,36, 0,39, 0,48, 0 
            ]
        }
    };
    
    // grab the clap sample; once loaded, start the synth
    fetch('clap.ogg').then((response) => {
        response.arrayBuffer().then((arraybuffer) => {
            var ac = new AudioContext();

            ac.decodeAudioData(arraybuffer).then((clap) => {
                window.litsynth = new S(ac, clap, track);

                litsynth.start();
                litsynth.pause();

                if (debug) {
                    console.log(litsynth);
                }
            });
        });
    });
}

window.addEventListener('load', function() {
    console.log('starting litsynth...');
    init(true);
});
