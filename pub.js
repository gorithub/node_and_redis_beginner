redis = require('redis'),
client = redis.createClient(6379, 'localhost');

// 1秒おきにランダムにチャンネル名と数値を送信する
setInterval(function() {
  client.publish(
    "hoge channel",
    Math.random());
}, 1000);
