
// https://github.com/fs-utils/fs-readdir-recursive
var fs = Npm.require('fs')
var path = Npm.require('path')

function read(root, filter, files, prefix) {
  prefix = prefix || ''
  files = files || []
  filter = filter || noDotFiles

  var dir = path.join(root, prefix)
  if (!fs.existsSync(dir)) return files
  if (fs.statSync(dir).isDirectory())
    fs.readdirSync(dir)
    .filter(filter)
    .forEach(function (name) {
      read(root, filter, files, path.join(prefix, name))
    })
  else
    files.push(prefix)

  return files
}

function noDotFiles(x) {
  return x[0] !== '.'
}

function filepath2id(path){
  return path.replace(/[\/\.-]/g, "_");
}


var DefaultInitialState = {};

// cf https://forums.meteor.com/t/how-to-list-images-inside-public/2555/3
Meteor.publish('soundSamples', function() {
  var self = this;
  var samplesDir = process.env.PWD + '/public/samples/';
  //var files = fs.readdirSync(samplesDir);
  var files = read(samplesDir);
  _.each(files, function(file) {
    if(file.indexOf(".wav") != -1) {
      console.log("adding " + file);
      var id = filepath2id(file);
      self.added('soundSamples', id, /*Random.id(),*/
		 { 'url': '/samples/'+file,
		   'name': file.substring(0,file.lastIndexOf(".")),
		   'type': file.match(/drum/) ? "drums"
		   : file.match(/bass/) ? "bass"
		   : file.match(/arp/) ? "arpaggio"
		   : "sound"
		 });
      DefaultInitialState[id] = { play: false, volume: 50, speed: 100 };
    }
  });
  this.ready();

  //console.log(DefaultInitialState);

  if (MusicMachine.find().count() == 0) {
    MusicMachine.insert(DefaultInitialState);
  }
});



Meteor.publish("musicMachine", function() {
  return MusicMachine.find();
});


