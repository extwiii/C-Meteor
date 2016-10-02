Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function () {
    this.render('home');
});
Router.route('/workspace', function () {
    this.render('workspace');
});
