var mqtt = require('mqtt');

var options = {
    host: '45fb8d87df7040eb8434cea2937cfb31.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'Team5@Broker',
    password: 'Team5@Broker'
}

// initialize the MQTT client
var booker = mqtt.connect(options);


// setup the callbacks
booker.on('connect', function () {
    console.log('Connected');
});

booker.on('error', function (error) {
    console.log(error);
});


booker.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
booker.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
booker.publish('my/test/topic', 'Hello');
