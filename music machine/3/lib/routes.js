Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('playground', {
  	to: "content"
  });
  this.render('footer', {
  	to: "footer"
  });
});

Router.route('/about', function () {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('about', {
    to: "content"
  });
  this.render('footer', {
    to: "footer"
  });
});