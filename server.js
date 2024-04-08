const express = require("express");
require("colors");
require("dotenv/config")
require("./db");

const app = express();
app.use(express.json());
const port = 5000;


app.get('/', (req, res) => {
    res.send('<h5> Hello World!!! </h5>');
});



    // Start the server once JSON data is loaded
    app.listen(port, () => {
        console.log(`Pokemon app listening on port ${port}`.bgBlue);
    });
