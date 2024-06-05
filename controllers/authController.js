const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config");
const User = require("../models/userModel");

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.createUser({ username, password });
    res.status(201).json({ message: "Uesr registered success !!!" });
  } catch (err) {
    res.status(500).json({ message: "Error registered user!" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ id: user.id }, config.jwtSecret, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports = {
  register,
  login,
};
