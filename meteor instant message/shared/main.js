Meteor.methods({
    insertChat: function(meteorUserId,otherUserId){
      if(!this.userId){ //not logged in
        return;
      }else{
         chatId = Chats.insert({user1Id:meteorUserId, user2Id:otherUserId});
      }
       
    },

    updateChats: function(chat){
       if(!this.userId){ //not logged in
        return;
      }else{
         Chats.update(chat._id, chat);
      }
       
    }

  });

