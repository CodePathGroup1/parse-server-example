
Parse.Cloud.define('push', function(request, response) {
    var user = new Parse.User();
    user.id = request.params.userId;
    
    console.log(user.id);
    console.log(user);
    console.log(request.params.userId);
    console.log(request.params.message);
    
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