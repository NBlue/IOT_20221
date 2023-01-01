// a. Gửi dữ liệu gồm 2 trường field1, field2 lên Thinkspeak qua API

// Cach 1:
const getCach1 = async () => {
    await fetch('https://api.thingspeak.com/update?api_key=T7H40F0X82VGW7L5&field1=20&field2=33')
        .then((response) => response.json())
        .then((data) => console.log('Data get 1: ' + data))
        .catch((error) => console.log(error));
};

// Cach 2:
const getCach2 = async () => {
    const body = {
        field1: 20,
        field2: 33,
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    await fetch('https://api.thingspeak.com/update?api_key=T7H40F0X82VGW7L5', options)
        .then((response) => response.json())
        .then((data) => console.log('Data get 2: ', data))
        .catch((error) => console.log(error));
};

// b. Lấy dữ liệu từ Thinkspeak API:
const getAPI = async () => {
    await fetch('https://api.thingspeak.com/channels/1529099/feeds.json?results=2')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const html = `
          <h3>GET: https://api.thingspeak.com/channels/1529099/feeds.json?results=2</h3>
          <ul>
              <li>Field1: ${data.channel.field1}</li>
              <li>Field2: ${data.channel.field2}</li>
          </ul>`;
            document.querySelector('.root').innerHTML = html;
        })
        .catch((error) => console.log(error));
};

const main = async () => {
    await getCach1();
    await getCach2();
    await getAPI();
};
main();
