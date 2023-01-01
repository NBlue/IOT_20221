const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    let id = 0;
    setInterval(() => {
        const data = JSON.stringify({
            id: ++id,
            packet_no: 126,
            tenperature: 30 * Math.random(),
            humidity: 60 * Math.random(),
            tds: 1100,
            pH: 5.0,
            timeStamp: Date.now(),
        });
        client.publish('/iot/lab02/namnp', data);
    }, 3000);
});
