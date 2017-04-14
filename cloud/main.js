Parse.Cloud.define('push', function(request, response) {
    var user = new Parse.User();
    user.id = request.params.userId;
    
    var query = new Parse.Query(Parse.Installation);
    query.equalTo("user", user);
    
    console.log(query);
    
    Parse.Push.send({
        where: {
            deviceType: "ios"
        },
        data: {
            alert: request.params.message,
            badge: 'Increment',
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