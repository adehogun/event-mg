const User = require("../models/user");

const createUsers = async (req, res) => {
    try {
        const { email, name, age, phoneNumber, isActive } = req.body;
        const user = await User.create({ email, name, age, phoneNumber, isActive });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to create user");
    }
};

const getUsers = async (req, res) => {
    try {

        const isActive = req.query.active === "true";

        const user = await User.find({});
        // const user = await User.find({isActive});
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to fetch users");
    }
};

module.exports = {
    createUsers,
    getUsers,
};
