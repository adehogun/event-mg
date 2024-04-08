const mongoose = require ("mongoose");

mongoose.connect (process.env.MONGO_URI)

.then (() => {
    console.log("Mongoose is now connected for even project")
})
.catch (() => {
    console.log(err);
})