redis = require('redis'),
client = redis.createClient(6379, 'localhost');

// random number by 1 minutes
setInterval(function() {
  client.publish(
    "hoge channel",
    Math.random());
}, 1000);
