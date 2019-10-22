global.__base = __dirname + '/app/';
const config = require(__base + 'config');
const express = require('express');
const app = express();
const port = config.port;
const server = require('http').createServer(app);


// server.listen(config.port, function () {
//     console.log('Server listening on http://localhost:%d/', config.port);
// });

app.get('/', (request, response) => {
    response.send('Hello from Express!');
});



app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
    console.log(`base = ${__base}`);
});

// let i = 0;
// while (1)  {
//     i++;
//     if (i > 100) {
//         break;
//     }
// }
// console.log(`i=${i}`);