//playground.js

maxim1  = new Maxim();
maxim2  = new Maxim();
maxim3  = new Maxim();
maxim4  = new Maxim();
maxim5  = new Maxim();
maxim6  = new Maxim();
maxim7  = new Maxim();
maxim8  = new Maxim();
maxim9  = new Maxim();
maxim10 = new Maxim();
maxim11 = new Maxim();
maxim12 = new Maxim();

player1 = maxim1.loadFile("drums1.wav");
player1.setLooping(true);
player2 = maxim2.loadFile("bassline.wav");
player2.setLooping(true);
player3 = maxim3.loadFile("arp.wav");
player3.setLooping(true);
player4 = maxim4.loadFile("chords.wav");
player4.setLooping(true);
player5 = maxim5.loadFile("808drum.wav");
player5.setLooping(true);
player6 = maxim6.loadFile("arp2.wav");
player6.setLooping(true);
player7 = maxim7.loadFile("bassdrum1.wav");
player7.setLooping(true);
player8 = maxim8.loadFile("cymbal1.wav");
player8.setLooping(true);
player9 = maxim9.loadFile("hihat2.wav");
player9.setLooping(true);
player10 = maxim10.loadFile("slowdrums.wav");
player10.setLooping(true);
player11 = maxim11.loadFile("snaredrum1.wav");
player11.setLooping(true);
player12 = maxim12.loadFile("vibes.wav");
player12.setLooping(true);


playDrums = function(){
	player1.play();
}
stopDrums = function(){
	player1.stop();
}
speedDrums = function(speed){
	player1.speed(speed);
}
volumeDrums = function(volume) {
	player1.volume(volume);
}

playBass = function(){
	player2.play();
}
stopBass = function(){
	player2.stop();
}
speedBass = function(speed){
	player2.speed(speed);
}
volumeBass = function(volume) {
	player2.volume(volume);
}

playArp = function(){
	player3.play();
}
stopArp = function(){
	player3.stop();
}
speedArp = function(speed){
	player3.speed(speed);
}
volumeArp = function(volume) {
	player3.volume(volume);
}

playChords = function() {
	player4.play();
}
stopChords = function() {
	player4.stop();
}
speedChords = function(speed){
	player4.speed(speed);
}
volumeChords = function(volume) {
	player4.volume(volume);
}

playDrums2 = function(){
	player5.play();
}
stopDrums2 = function(){
	player5.stop();
}
speedDrums2 = function(speed){
	player5.speed(speed);
}
volumeDrums2 = function(volume) {
	player5.volume(volume);
}

playArp2 = function(){
	player6.play();
}
stopArp2 = function(){
	player6.stop();
}
speedArp2 = function(speed){
	player6.speed(speed);
}
volumeArp2 = function(volume) {
	player6.volume(volume);
}

playBassdrum = function(){
	player7.play();
}
stopBassdrum = function(){
	player7.stop();
}
speedBassdrum = function(speed){
	player7.speed(speed);
}
volumeBassdrum = function(volume) {
	player7.volume(volume);
}

playCymbal = function(){
	player8.play();
}
stopCymbal = function(){
	player8.stop();
}
speedCymbal = function(speed){
	player8.speed(speed);
}
volumeCymbal = function(volume) {
	player8.volume(volume);
}

playHihat = function(){
	player9.play();
}
stopHihat = function(){
	player9.stop();
}
speedHihat = function(speed){
	player9.speed(speed);
}
volumeHihat = function(volume) {
	player9.volume(volume);
}

playSlowdrum = function(){
	player10.play();
}
stopSlowdrum = function(){
	player10.stop();
}
speedSlowdrum = function(speed){
	player10.speed(speed);
}
volumeSlowdrum = function(volume) {
	player10.volume(volume);
}

playSnaredrum = function(){
	player11.play();
}
stopSnaredrum = function(){
	player11.stop();
}
speedSnaredrum = function(speed){
	player11.speed(speed);
}
volumeSnaredrum = function(volume) {
	player11.volume(volume);
}

playVibes = function(){
	player12.play();
}
stopVibes = function(){
	player12.stop();
}
speedVibes = function(speed){
	player12.speed(speed);
}
volumeVibes = function(volume) {
	player12.volume(volume);
}