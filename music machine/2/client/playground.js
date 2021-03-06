
maxim = [];
for (var i = 0; i < 8; i++) {
    maxim[i] = new Maxim();
}
player = [];
player[0] = maxim[0].loadFile("drums1.wav");
player[1] = maxim[1].loadFile("drums2.wav");
player[2] = maxim[2].loadFile("drums3.wav");
player[3] = maxim[3].loadFile("drums4.wav");
player[4] = maxim[4].loadFile("sound1.wav");
player[5] = maxim[5].loadFile("sound2.wav");
player[6] = maxim[6].loadFile("sound3.wav");
player[7] = maxim[7].loadFile("sound4.wav");
for (var i = 0; i < 8; i++) {
    player[i].setLooping(true);
}

playOne = function(i) {
    player[i].volume(1);
}

stopOne = function(i) {
    player[i].volume(0);
}

playAll = function() {
    for (var i = 0; i < 8; i++) {
        player[i].play();
    }
}

stopAll = function() {
    for (var i = 0; i < 8; i++) {
        player[i].stop();
    }
}

setSpeed = function(i, speed) {
    player[i].speed(speed);
}

setVolume = function(i, volume) {
    player[i].volume(volume);
}
