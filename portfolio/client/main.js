Template.registerHelper("formatTime", function(time){
    if(!time){
       return;
    }
    console.log(moment(time).format("MMMM d, YYYY HH:mm"))
    return moment(time).format("MMMM d, YYYY HH:mm");
});
Template.post.helpers({
  background:function (titleBackground,image) {
    if(titleBackground === true){
      if(image){
          $("#head").css({"background":"#f4f4f4 url(" + image +") top center","background-size":"cover"});
      }
    }
  }
});
Template.about.events({
  "click .nav-side li":function (event) {
    event.preventDefault();
    if($(event.currentTarget).hasClass('active')){
      $(event.currentTarget).removeClass('active');
    }else{
      $('.nav-side li').removeClass('active');
      $(event.currentTarget).addClass('active');
    }
  }
});
Template.about.events({
  "click .nav-side a":function functionName(event) {
    event.preventDefault();
    var group = $('.topspace');
    group.find('.collapse.in').collapse('hide');
  }
});
