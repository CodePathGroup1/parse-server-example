
Parse.Cloud.define('push', function(request, response) {
    var user = new Parse.User();
    user.id = request.params.userId;
    
    var query = new Parse.Query(Parse.Installation);
    query.equalTo("user", user);
    
    Parse.Push.send({
        where: query,
        data: {
            alert: request.params.message,
            badge: 'increment',
            sound: ''
        }
    }, { useMasterKey: true });
});