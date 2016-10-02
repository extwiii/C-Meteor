var Players = {};

Meteor.subscribe("musicMachine");
Meteor.subscribe('soundSamples', function() {
  Players = initPlayers();
  window.Players = Players;
});


Session.set("dacOn", true);


Router.configure({
  layoutTemplate: "ApplicationLayout"
});

Router.route('/', function() {
  this.render('navbar', {to:'header'});
  this.render('introduction', {to:'main'});
});

Router.route('/playground', function() {
  this.render('navbar', {to:'header'});
  this.render('playground', {to:'main'});
});


Template.playground.helpers({
  samples: function() {
    return SoundSamples.find();
  }
});


Template.player.helpers({
  // This is inserted into the "player" template so that the template is
  // re-rendered whenever this function needs re-computing.
  //
  // Because this function is dependent on the shared state coming from
  // the mongodb, it should be re-computed whenever the shared state is
  // updated (ie when an external state update arrives via the db)
  //
  // When the function is triggered, we use it to update the player's
  // behaviour and update the local control UI with the values in the
  // shared state.
  reactToState: function() {
    
    var playerId = this._id;
    var state = MusicMachine.findOne();
    
    var playerState = state[playerId] || {};
    
    if (!playerState)
      return;

    var player = Players[playerId];

    if (!player)
      return;

    //console.log("reactToState", playerId,playerState);

    updatePlayer(player,playerState);
    
    updateControlsUI(Template.instance(),playerState);

    return playerState;
  }
});


Template.player.events({
  // To test the play function: clicking on the sample name plays it 
  'click .js-play-sample': function(event) {
    var sampleId = $(event.currentTarget).attr("sample-id");
    play(sampleId);
    event.preventDefault();
  },

  // A custom toggle-button; Bootstrap-Toggle was so disappointingly tricky
  'click button.playpause': function(event) {  
    var parameter = "play";
    var value = undefined;
    var playerId = this._id;
    
    var $play = Template.instance().$("button[name=play]");
    var $pause = Template.instance().$("button[name=pause]");

    var thisButton = $(event.currentTarget).attr("name");

    if (thisButton === "play") {
      $play.hide();
      $pause.show();
      value = true;
    } else {
      $play.show();
      $pause.hide();
      value = false;      
    }

    var state = MusicMachine.findOne();
    objSetPath(state, [playerId,parameter], value);

    updateSharedState(state);    
  }
});


Template.navbar.onRendered(function() {
  var $elem = this.$("[name=dac]");

  $elem.change(function(){
    var dacOn = $(this).prop("checked");
    Session.set("dacOn", dacOn);

    //console.log("dac", dacOn);
    
    if (dacOn)
      playAll();
    else
      stopAll();
  });

  $elem.prop("checked", true).change();
  //  try { $elem.bootstrapToggle("on"); } catch(e) { }
  
});


// Called once after the player template is rendered into the DOM
// We use it to initialise the UI plugins.
// This also includes configuring them to react to local user events
// by updating the shared states.
Template.player.onRendered(function() {
  this.$(".react-to-state").hide();
  
  var playerId = this.$("tr").attr("player-id");

  for (let slider of ["volume", "speed"]) {
    var $sliderEl = this.$("[name="+slider+"]");
    // react to change from local user clicks
    $sliderEl.on("input", function(e){
      var parameter = slider;
      var value = $(this).prop("value");

      var state = MusicMachine.findOne();
      objSetPath(state, [playerId,parameter], parseInt(value));
      
      updateSharedState(state);      
    });
  }

  var state = MusicMachine.findOne() || {};
  var playerState = state[playerId] || {};
  
  if (playerState)
    updateControlsUI(this,playerState);
  
});



// Update the player behaviour from the playerState
function updatePlayer(player,playerState) {

  var volume = (playerState.volume !== undefined ? parseInt(playerState.volume) : 50) /100;
  var speed = (playerState.speed !== undefined ? parseInt(playerState.speed) : 100)   /100;

  player.volume(volume);  
  player.speed(speed);
    
  if (!playerState.play) {
    player.volume(0);
  } 
}

// Update the controls UI from the playerState
function updateControlsUI(templateInstance,playerState) {
  // Return immediately if this template has no View ie DOM object
  // attached to it.
  // It feels hacky but is needed to prevent the first invocation
  // of this function (called from reactToState(), when the template
  // is created for the very first time) from throwing an error.
  if (!templateInstance.view.isRendered)
    return;


  var $play = templateInstance.$("[name=play]");
  var $pause = templateInstance.$("[name=pause]");
  
  if (playerState.play) {
    $play.hide();
    $pause.show();
  } else {
    $play.show();
    $pause.hide();    
  }
    
  for (let param of ["volume", "speed"]) {
    if (playerState[param]) {
      var $elem = templateInstance.$("[name="+param+"]");
      if ($elem)
	$elem.val(playerState[param]);//.trigger("change");
    }    
  }

  
}

function updateSharedStateImmediately(state) {
  var sharedState = MusicMachine.findOne();  
  MusicMachine.update({ _id: sharedState._id }, state);
}

//var updateSharedState = _.throttle(updateSharedStateImmediately, 200, {trailing: false});
// var updateSharedState = _.debounce(updateSharedStateImmediately, 50);
var updateSharedState = updateSharedStateImmediately;

function initPlayers() {
  var players = {};
  
  SoundSamples.find().forEach(function(sample) {
    var maxim = new Maxim();
    var player = maxim.loadFile(sample.url, function(){
      player.volume(0);
      player.setLooping(true);
      player.play();
    });
    // player.volume(0);
    // player.setLooping(true);
    players[sample._id] = player;
  });
  
  return players;
}

function play(sampleId) {
  
  var player = Players[sampleId];

  if (!player) return;

  console.log("playing", sampleId);
  
  //stopAll();
  player.stop();
  player.volume(1);
  player.play();  
}

function stop(sampleId) {
  var player = Players[sampleId];

  if (!player) return;

  console.log("stopping", sampleId);
  player.volume();  
}


function playAll() {
  //console.log("playAll");
  _.forEach(Players, function(player,playerId) { player.play(); });
}

function stopAll() {
  //console.log("stopAll");
  _.forEach(Players, function(player,playerId) { player.stop(); });
}
