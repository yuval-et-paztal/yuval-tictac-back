const express = require('express');

const app = express();
const PORT = 3000;

/* basic route */
app.get('/', function (req, res) {
    res.send('yuval et paztal inc!');
});

/* start server */
app.listen(PORT, function () {
    console.log('Server running on port ' + PORT);
});
