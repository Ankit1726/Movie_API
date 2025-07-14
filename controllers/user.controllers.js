import User from "../models/user.model.js";

export const home = (req, res) => {
  res.send("Hello Dev's");
};

export const createUser = async (req, res) => {
  try {
    let { name, age, email, userName } = req.body;

    const newUser = await User.create({
      name,
      age,
      email,
      userName,
    });

    res.status(201).json({ message: "User Created" });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export const readUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    return res.status(400).json({ message: "User not Found" });
  }
};

export const ReaduserName = async (req, res) => {
  try {
    const users = await User.findOne({ userName: req.params.userName });
    res.status(200).json(users);
  } catch (e) {
    return res.status(400).json({ message: "User not Found" });
  }
};

export const updateByid = async (req, res) => {
  try {
    let { name, age } = req.body;
    let id = req.params.id;
    let user = await User.findByIdAndUpdate(id, { name, age }, { new: true });
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: "User not found..." });
  }
};

export const updateUser = async (req, res) => {
  try {
    let { name, age, email } = req.body;
    let user = await User.updateOne({ email }, { name, age }, { new: true });
    return res.status(200).json({ message: "User Updated" });
  } catch (e) {
    return res.status(400).json({ message: "User not found..." });
  }
};

export const deleteByid = async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findByIdAndDelete(id);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: "User not found..." });
  }
};

export const deleteUser = async (req, res) => {
  try {
    let { userName } = req.body;
    let user = await User.deleteOne({ userName });
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: "User not found..." });
  }
};
