
//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");


if (Meteor.isClient) {
  Template.playground.helpers({
    "drums": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.drums==1) {
          playDrums();

        } else if (starter.drums==0) {

          stopDrums();

        }
      }

      return Session.get('drums');
    },

    "bass": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassline==1) {
          playBass();

        } else if (starter.bassline==0) {

          stopBass();

        }
      }
      return Session.get('bass');
    },

    "arp": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.arp==1) {
          playArp();

        } else if (starter.arp==0) {

          stopArp();

        }
      }
      return Session.get('arp');
    },

    "chords": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.chords==1) {
          playChords();
        } else if (starter.chords==0) {
          stopChords();
        }
      }
      return Session.get('chords');
    },

    "drums2": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.drums2==1) {
          playDrums2();
        } else if (starter.drums2==0) {
          stopDrums2();
        }
      }
      return Session.get('drums2');
    },

    "arp2": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.arp2==1) {
          playArp2();
        } else if (starter.arp2==0) {
          stopArp2();
        }
      }
      return Session.get('arp2');
    },

    "bassDrum": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassdrum==1) {
          playBassdrum();
        } else if (starter.bassdrum==0) {
          stopBassdrum();
        }
      }
      return Session.get('bassdrum');
    },

    "cymbal": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.cymbal==1) {
          playCymbal();
        } else if (starter.cymbal==0) {
          stopCymbal();
        }
      }
      return Session.get('cymbal');
    },

    "hihat": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.hihat==1) {
          playHihat();
        } else if (starter.hihat==0) {
          stopHihat();
        }
      }
      return Session.get('hihat');
    },

    "slowdrum": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.slowdrum==1) {
          playSlowdrum();
        } else if (starter.slowdrum==0) {
          stopSlowdrum();
        }
      }
      return Session.get('slowdrum');
    },

    "snaredrum": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.snaredrum==1) {
          playSnaredrum();
        } else if (starter.snaredrum==0) {
          stopSnaredrum();
        }
      }
      return Session.get('snaredrum');
    },

    "vibes": function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.vibes==1) {
          playVibes();
        } else if (starter.vibes==0) {
          stopVibes();
        }
      }
      return Session.get('vibes');
    },


   

    //don't forget the commas between each function
//the last one doesn't have to have one!
    "sliderVal2":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider2').data('uiSlider').value(slider.slide2);
        speedDrums(slider.slide2/50);
        return slider.slide2;
      }
    },

    "sliderVal3":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider3').data('uiSlider').value(slider.slide3);
        volumeDrums(slider.slide3/50);
        return slider.slide3;
      }
    },

    "sliderVal4":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider4').data('uiSlider').value(slider.slide4);
        speedBass(slider.slide4/50);
        return slider.slide4;
      }
    },

    "sliderVal5":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider5').data('uiSlider').value(slider.slide5);
        volumeBass(slider.slide5/50);
        return slider.slide5;
      }
    },

    "sliderVal6":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider6').data('uiSlider').value(slider.slide6);
        speedArp(slider.slide6/50);
        return slider.slide6;
      }
    },

    "sliderVal7":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider7').data('uiSlider').value(slider.slide7);
        volumeArp(slider.slide7/50);
        return slider.slide7;
      }
    },

    "sliderVal8":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider8').data('uiSlider').value(slider.slide8);
        speedChords(slider.slide8/50);
        return slider.slide8;
      }
    },

    "sliderVal9":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider9').data('uiSlider').value(slider.slide9);
        volumeChords(slider.slide9/50);
        return slider.slide9;
      }
    },

    "sliderVal10":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider10').data('uiSlider').value(slider.slide10);
        speedDrums2(slider.slide10/50);
        return slider.slide10;
      }
    },

    "sliderVal11":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider11').data('uiSlider').value(slider.slide11);
        volumeDrums2(slider.slide11/50);
        return slider.slide11;
      }
    },

    "sliderVal12":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider12').data('uiSlider').value(slider.slide12);
        speedArp2(slider.slide12/50);
        return slider.slide12;
      }
    },

    "sliderVal13":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider13').data('uiSlider').value(slider.slide13);
        volumeArp2(slider.slide13/50);
        return slider.slide13;
      }
    },

    "sliderVal14":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider14').data('uiSlider').value(slider.slide14);
        speedBassdrum(slider.slide14/50);
        return slider.slide14;
      }
    },

    "sliderVal15":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider15').data('uiSlider').value(slider.slide15);
        volumeBassdrum(slider.slide15/50);
        return slider.slide15;
      }
    },

    "sliderVal16":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider16').data('uiSlider').value(slider.slide16);
        speedCymbal(slider.slide16/50);
        return slider.slide16;
      }
    },

    "sliderVal17":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider17').data('uiSlider').value(slider.slide17);
        volumeCymbal(slider.slide17/50);
        return slider.slide17;
      }
    },

    "sliderVal18":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider18').data('uiSlider').value(slider.slide18);
        speedHihat(slider.slide18/50);
        return slider.slide18;
      }
    },

    "sliderVal19":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider19').data('uiSlider').value(slider.slide19);
        volumeHihat(slider.slide19/50);
        return slider.slide19;
      }
    },

    "sliderVal20":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider20').data('uiSlider').value(slider.slide20);
        speedSlowdrum(slider.slide20/50);
        return slider.slide20;
      }
    },

    "sliderVal21":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider21').data('uiSlider').value(slider.slide21);
        volumeSlowdrum(slider.slide21/50);
        return slider.slide21;
      }
    },

    "sliderVal22":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider22').data('uiSlider').value(slider.slide22);
        speedSnaredrum(slider.slide22/50);
        return slider.slide22;
      }
    },

    "sliderVal23":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider23').data('uiSlider').value(slider.slide23);
        volumeSnaredrum(slider.slide23/50);
        return slider.slide23;
      }
    },

    "sliderVal24":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider24').data('uiSlider').value(slider.slide24);
        speedVibes(slider.slide24/50);
        return slider.slide24;
      }
    },

    "sliderVal25":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider25').data('uiSlider').value(slider.slide25);
        volumeVibes(slider.slide25/50);
        return slider.slide25;
      }
    },



  });


  Template.playground.events({
     "click button.myButton1": function () {
      $(".icon1").css("color", "green");
      Session.set('drums', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 1}});
    },

      "click button.myButton2": function () {
      $(".icon1").css("color", "red");
      Session.set('drums', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 0}});
    },

      "click button.myButton3": function () {
      $(".icon2").css("color", "green");
      Session.set('bass', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 1}});
    },

      "click button.myButton4": function () {
      $(".icon2").css("color", "red");
      Session.set('bass', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 0}});
    },

      "click button.myButton5": function () {
      $(".icon3").css("color", "green");
      Session.set('arp', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 1}});
    },

      "click button.myButton6": function () {
      $(".icon3").css("color", "red");
      Session.set('arp', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 0}});
    },

      "click button.myButton7" : function() {
        $(".icon4").css("color", "green");
        Session.set('chords', 1);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id: val._id}, {$set: {chords: 1}});
    },

      "click button.myButton8" : function() {
        $(".icon4").css("color", "red");
        Session.set('chords', 0);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id: val._id}, {$set: {chords: 0}});
    },

      "click button.myButton9": function () {
      $(".icon5").css("color", "green");
      Session.set('drums2', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums2: 1}});
    },

      "click button.myButton10": function () {
      $(".icon5").css("color", "red");
      Session.set('drums2', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums2: 0}});
    },

    "click button.myButton11": function () {
      $(".icon6").css("color", "green");
      Session.set('arp2', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp2: 1}});
    },

      "click button.myButton12": function () {
      $(".icon6").css("color", "red");
      Session.set('arp2', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp2: 0}});
    },

    "click button.myButton13": function () {
      $(".icon7").css("color", "green");
      Session.set('bassdrum', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum: 1}});
    },

      "click button.myButton14": function () {
      $(".icon7").css("color", "red");
      Session.set('bassdrum', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum: 0}});
    },

    "click button.myButton15": function () {
      $(".icon8").css("color", "green");
      Session.set('cymbal', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal: 1}});
    },

      "click button.myButton16": function () {
      $(".icon8").css("color", "red");
      Session.set('cymbal', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal: 0}});
    },

    "click button.myButton17": function () {
      $(".icon9").css("color", "green");
      Session.set('hihat', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hihat: 1}});
    },

      "click button.myButton18": function () {
      $(".icon9").css("color", "red");
      Session.set('hihat', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hihat: 0}});
    },

    "click button.myButton19": function () {
      $(".icon10").css("color", "green");
      Session.set('slowdrum', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {slowdrum: 1}});
    },

      "click button.myButton20": function () {
      $(".icon10").css("color", "red");
      Session.set('slowdrum', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {slowdrum: 0}});
    },

    "click button.myButton21": function () {
      $(".icon11").css("color", "green");
      Session.set('snaredrum', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum: 1}});
    },

      "click button.myButton22": function () {
      $(".icon11").css("color", "red");
      Session.set('snaredrum', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum: 0}});
    },

    "click button.myButton23": function () {
      $(".icon12").css("color", "green");
      Session.set('vibes', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {vibes: 1}});
    },

      "click button.myButton24": function () {
      $(".icon12").css("color", "red");
      Session.set('vibes', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {vibes: 0}});
    },

  });

  Template.playground.onRendered(function() {
    $('h2').hide();

    var handler2 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide2: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider2').data('uiSlider')) {
        $("#slider2").slider({
            slide: handler2,
            min: 0,
            max: 100
        });
    }

    var handler3 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide3: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider3').data('uiSlider')) {
        $("#slider3").slider({
            slide: handler3,
            min: 0,
            max: 100
        });
    }

    var handler4 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide4: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider4').data('uiSlider')) {
        $("#slider4").slider({
            slide: handler4,
            min: 0,
            max: 100
        });
    }

    var handler5 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide5: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider5').data('uiSlider')) {
        $("#slider5").slider({
            slide: handler5,
            min: 0,
            max: 100
        });
    }

    var handler6 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide6: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider6').data('uiSlider')) {
        $("#slider6").slider({
            slide: handler6,
            min: 0,
            max: 100
        });
    }

    var handler7 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide7: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider7').data('uiSlider')) {
        $("#slider7").slider({
            slide: handler7,
            min: 0,
            max: 100
        });
    }

    var handler8 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide8: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider8').data('uiSlider')) {
        $("#slider8").slider({
            slide: handler8,
            min: 0,
            max: 100
        });
    }

    var handler9 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide9: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider9').data('uiSlider')) {
        $("#slider9").slider({
            slide: handler9,
            min: 0,
            max: 100
        });
    }

    var handler10 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide10: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider10').data('uiSlider')) {
        $("#slider10").slider({
            slide: handler10,
            min: 0,
            max: 100
        });
    }

    var handler11 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide11: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider11').data('uiSlider')) {
        $("#slider11").slider({
            slide: handler11,
            min: 0,
            max: 100
        });
    }

    var handler12 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide12: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider12').data('uiSlider')) {
        $("#slider12").slider({
            slide: handler12,
            min: 0,
            max: 100
        });
    }

    var handler13 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide13: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider13').data('uiSlider')) {
        $("#slider13").slider({
            slide: handler13,
            min: 0,
            max: 100
        });
    }

    var handler14 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide14: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider14').data('uiSlider')) {
        $("#slider14").slider({
            slide: handler14,
            min: 0,
            max: 100
        });
    }

    var handler15 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide15: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider15').data('uiSlider')) {
        $("#slider15").slider({
            slide: handler15,
            min: 0,
            max: 100
        });
    }

    var handler16 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide16: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider16').data('uiSlider')) {
        $("#slider16").slider({
            slide: handler16,
            min: 0,
            max: 100
        });
    }

    var handler17 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide17: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider17').data('uiSlider')) {
        $("#slider17").slider({
            slide: handler17,
            min: 0,
            max: 100
        });
    }

    var handler18 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide18: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider18').data('uiSlider')) {
        $("#slider18").slider({
            slide: handler18,
            min: 0,
            max: 100
        });
    }

    var handler19 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide19: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider19').data('uiSlider')) {
        $("#slider19").slider({
            slide: handler19,
            min: 0,
            max: 100
        });
    }

    var handler20 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide20: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider20').data('uiSlider')) {
        $("#slider20").slider({
            slide: handler20,
            min: 0,
            max: 100
        });
    }

    var handler21 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide21: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider21').data('uiSlider')) {
        $("#slider21").slider({
            slide: handler21,
            min: 0,
            max: 100
        });
    }

    var handler22 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide22: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider22').data('uiSlider')) {
        $("#slider22").slider({
            slide: handler22,
            min: 0,
            max: 100
        });
    }

    var handler23 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide23: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider23').data('uiSlider')) {
        $("#slider23").slider({
            slide: handler23,
            min: 0,
            max: 100
        });
    }

    var handler24 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide24: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider24').data('uiSlider')) {
        $("#slider24").slider({
            slide: handler24,
            min: 0,
            max: 100
        });
    }

    var handler25 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide25: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider25').data('uiSlider')) {
        $("#slider25").slider({
            slide: handler25,
            min: 0,
            max: 100
        });
    }



  });
}

if (Meteor.isServer) {
      MusicMachine.remove({});
      if (MusicMachine.find().count() === 0) {
      MusicMachine.insert({slide2:50, slide3:50, slide4:50, slide5:50, slide6:50, slide7:50,
        slide8:50, slide9:50, slide10:50, slide11:50, slide12:50, slide13:50, slide14:50, slide15:50,
        slide16:50, slide17:50, slide18:50, slide19:50, slide20:50, slide21:50, slide22:50, slide23:50,
        slide24:50, slide25:50,});
    }

}