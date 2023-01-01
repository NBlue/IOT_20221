const User = require('../models/users');

const userController = {
    // Add user
    addUser: async (req, res) => {
        try {
            const newUser = await new User({
                name: req.body.name,
                gender: req.body.gender,
                mssv: req.body.mssv,
                class: req.body.class,
            });

            const user = await newUser.save();
            return res.status(200).json({
                success: true,
                message: 'Post successfull!',
                user: user,
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    // Get user
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            return res.status(200).json({
                success: true,
                message: 'Get successfull!',
                user: user,
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    // Update user
    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const newData = await User.findOneAndReplace({ id: userId }, req.body, { new: true });
            return res.status(200).json({
                success: true,
                message: 'Update successfull!',
                user: newData,
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    // Delete user
    deleteUser: async (req, res) => {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                success: true,
                message: 'Delete successfull!',
                user: deleteUser,
            });
        } catch (error) {
            return res.status(500).json(errror);
        }
    },
};

module.exports = userController;
