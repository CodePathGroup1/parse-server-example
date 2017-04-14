Parse.Cloud.define('push', function(request, response) {
    var user = new Parse.User();
    user.id = request.params.objectId;
    
    var query = new Parse.Query(Parse.Installation);
    query.equalTo("user", user);
    
    Parse.Push.send({
        where: query,
        data: {
            alert: request.params.message,
            conversationId: request.params.conversationId,
            sound: 'default'
        }
    }, {
      success: function() {
        console.log('##### PUSH OK');
        res.success();
      },
      error: function(error) {
        console.log('##### PUSH ERROR');
        res.error();
      },
      useMasterKey: true
    });
});