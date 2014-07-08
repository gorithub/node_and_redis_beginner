var sys        = require('sys');
var redis      = require('redis');
var subscriber = redis.createClient(6379, 'localhost');

subscriber.subscribe('hoge channel');
subscriber.on("message", function(channel, message) {
    sys.puts(channel + " :" + message);
});
