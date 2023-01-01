const amqp = require('amqplib/callback_api');

amqp.connect(`amqp://localhost`, (err, connection) => {
    if (err) {
        throw err;
    }

    connection.createChannel((err, channel) => {
        if (err) {
            throw err;
        }
        let queueName = 'iot-bai3';
        channel.assertQueue(queueName, {
            durable: false,
        });
        channel.consume(queueName, (data) => {
            console.log('Recieved mess:' + data.content.toString());
            channel.ack(data);
        });
    });
});
