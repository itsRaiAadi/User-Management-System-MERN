import User from "../model/userModel.js";

// Create User
export const createUser = async (req, resp) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return resp.status(400).json({
        message: "User already exists !",
      });
    }
    const saveUser = await newUser.save();
    // resp.status(200).json(saveUser);
    resp.status(200).json({
      message: "User Created Successfully.",
    });
  } catch (error) {
    resp.status(500).json({
      errorMsg: error.message,
    });
  }
};

// Get all Users
export const getAllUsers = async (req, resp) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return resp.status(404).json({
        message: "User data not found !",
      });
    }
    resp.status(200).json(userData);
  } catch (error) {
    resp.status(500).json({
      message: "Data not found !",
    });
  }
};

// Get user by Id
export const getUserById = async (req, resp) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return resp.status(404).json({
        message: "User data not found !",
      });
    }
    resp.status(200).json(userExist);
  } catch (error) {
    resp.status(500).json(error.message);
  }
};

// Update User by Id
export const updateUser = async (req, resp) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return resp.status(404).json({
        message: "User data not found !",
      });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    resp.status(200).json({
      message: "User Updated Successfully.",
    });
  } catch (error) {
    resp.status(500).json({
      message: "Something went wrong !",
    });
  }
};

// Delete User by Id
export const deleteUser = async (req, resp) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return resp.status(404).json({
        message: "User data not found !",
      });
    }
    const deletedData = await User.findByIdAndDelete(id);
    resp.status(200).json({
      id: id,
      message: "User Deleted Sucessfully",
    });
  } catch (error) {
    resp.status(500).json({
      error,
      message: "Something went wrong !",
    });
  }
};
