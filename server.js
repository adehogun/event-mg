const express = require("express");
require("colors");
require("dotenv/config");
require("./db");

const userRouter = require("./routes/user");

const app = express();
const port = 5000;

app.use(express.json());

app.use("/api/user", userRouter);

// Default route
app.get('/', (req, res) => {
    res.send('<h5> Hello World!!! </h5>');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgBlue);
});
