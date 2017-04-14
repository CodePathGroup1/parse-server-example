
Parse.Cloud.define('push', function(request, response) {
    var query = new Parse.Query(Parse.Installation);
    query.equalTo("userId", request.params.userId);
    
    Parse.Push.send({
        where: query,
        data: {
            alert: request.params.message,
            badge: 'increment',
            sound: ''
        }
    }, { useMasterKey: true });
});