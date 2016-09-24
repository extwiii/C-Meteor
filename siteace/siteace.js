Websites = new Mongo.Collection("websites");

if (Meteor.isClient) {

	
	//http://aw-melcshum.meteor.com/home
	//http://pieter-meteor-dev.meteor.com/
	//http://mvaradi_coursera.meteor.com/

	//Routing

	Router.configure({
		layoutTemplate: 'ApplicationLayout' 

	});

	Router.route('/', function () {

  		this.render('navbar',{
  			to:"navbar"
  		});
  		this.render('website_form',{
  			to:"header"
  		});
  		this.render('website_list',{
  			to:"main"
  		});
  		this.render('login',{
  			to:"login"
  		});
	});

	Router.route('/detail/:_id', function () {
  		this.render('navbar',{
  			to:"navbar"
  		});
  		
  		this.render('detail',{
  			to:"main",
  			data: function(){
  				return Websites.findOne({_id:this.params._id});
  			}
  		});
	});

	


	//Set login fields
	Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_EMAIL" 
	});

	// helper function that returns all available websites
	Template.website_list.helpers({
		websites:function(){
			return Websites.find({},{sort:{score:-1, createdOn: -1}});
		}
	});

	

	


	Template.website_item.events({
		"click .js-upvote":function(event){
			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;

			Websites.update({_id:website_id}, 
               { $inc: { score: 1 }}

             );

			console.log("Up voting website with id " +website_id);
			// put the code in here to add a vote to a website!

			return false;// prevent the button from reloading the page
		}, 
		"click .js-downvote":function(event){

			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;

			Websites.update({_id:website_id}, 
               { $inc: { score: -1 }}

             );
			console.log("Down voting website with id "+website_id);

			// put the code in here to remove a vote from a website!

			return false;// prevent the button from reloading the page
		}
		, 
		"click .js-delete":function(event){

			// delete item from collection

			Websites.remove({ _id:this._id });


			return false;// prevent the button from reloading the page
		}
	});

	Template.website_form.events({
		"click .js-toggle-website-form":function(event){
			$("#website_form").toggle('slow');
		}, 
		"submit .js-save-website-form":function(event){
			event.preventDefault();
			// here is an example of how to get the url out of the form:
			var url = event.target.url.value;
			var title = event.target.title.value;
			var description = event.target.description.value;
			console.log("The url they entered is: "+url);
			score = 0;

		
			if (Meteor.user()){
        		Websites.insert({
        			url:url, 
        			title:title,
        			description:description, 
        			score :score,
        			comment:'',
        			createdOn:new Date().toDateString(),
        			createdBy:Meteor.user()._id
      			});
  			}
  			

    		$(".hidden_div").hide('slow');
			
			// @@@@@@@@@ createdBy:Meteor.user()._id;  lesson 3.3.5 @@@@@@@@@@

			//  put your website saving code in here!	

			return false;// stop the form submit from reloading the page

		}
	});

	Template.detail.events({
		"submit .js-save-comment-form":function(event){
			event.preventDefault();
			// here is an example of how to get the url out of the form:
			var comment = event.target.comment.value;
			console.log(comment);
			var website_id = this._id;

				if (Meteor.user()){
        		Websites.update({_id:website_id},{
        			$set: {comment:comment}
      			});
  				}

            	//addToSet: {comments : {fill the blank}}

            	comment="";
          
				
		}	
	});
}


if (Meteor.isServer) {
	// start up function that creates entries in the Websites databases.
	
}
