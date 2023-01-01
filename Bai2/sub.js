const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    client.subscribe('/iot/lab02/namnp');
    console.log('Client has subscribed successfully!');
});

client.on('message', (topic, message) => {
    console.log('Data: ' + message.toString());
});
