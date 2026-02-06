import User from "../models/User.js";

// pages
export const showLogin = (req, res) => {
  res.render("login");
};

export const showSignup = (req, res) => {
  res.render("signup");
};

export const showHome = (req, res) => {
  res.render("home");
};

// signup
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.send("User already exists ❌");
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.send("Signup error ❌");
  }
};

// login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.send("User not found ❌");

    if (user.password !== password)
      return res.send("Wrong password ❌");

    res.redirect("/home");
  } catch (error) {
    console.log(error);
    res.send("Login error ❌");
  }
};
