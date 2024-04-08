const  {Schema, model} = require ("mongoose");

// You use the model to manipulate the database
const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    age: { type: Number, min: 18 }, // Minimum age of 18
    phoneNumber: { type: String, unique: true, required: true },
    isActive : { type: Boolean, default: false }
});


const User = model ("user", userSchema);

module.exports = User;

