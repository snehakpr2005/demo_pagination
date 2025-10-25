import MyModel from "../models/userModel.js";

export const addUsers = async (req, res) => {
  try {
    const users = [];
    for (let i = 1; i <= 50; i++) {
      users.push({
        name: `MyUser${i}`,
        email: `myuser${i}@gmail.com`,
        age: 10 + (i % 10),
      });
    }
    await MyModel.insertMany(users);
    res.status(201).json({ message: "Users added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPaginatedUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip_n = (page - 1) * limit;

    //  Use MyModel instead of User
    const users = await MyModel.find().skip(skip_n).limit(limit);
    const total = await MyModel.countDocuments();

    res.status(200).json({
      totalUsers: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      users,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
