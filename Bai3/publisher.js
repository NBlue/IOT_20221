const amqp = require('amqplib/callback_api');

amqp.connect(`amqp://localhost`, (err, connection) => {
    if (err) {
        throw err;
    }
    connection.createChannel((err, channel) => {
        if (err) throw err;
        let queueName = 'iot-bai3';
        const data = JSON.stringify({
            id: 11,
            packet_no: 126,
            tenperature: 30,
            humidity: 60,
            tds: 1100,
            pH: 5.0,
            timeStamp: Date.now(),
        });
        channel.assertQueue(queueName, {
            durable: false,
        });
        channel.sendToQueue(queueName, Buffer.from(data));
        console.log({ data });
        setTimeout(() => {
            connection.close();
        }, 1000);
    });
});
