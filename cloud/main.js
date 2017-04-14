Parse.Cloud.define('push', function(request, response) {
    var query = new Parse.Query(Parse.User);
    query.equalTo('objectId', request.params.objectId);
    
    var pushQuery = new Parse.Query(Parse.Installation);
    pushQuery.matchesQuery('user', query);
    
    console.log(query);
    
    Parse.Push.send({
        where: pushQuery,
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