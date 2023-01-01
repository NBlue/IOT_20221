const userController = require('../controllers/userController');

const router = require('express').Router();

// Add user
router.post('/', userController.addUser);

// Get all users
router.get('/', userController.getAllUsers);

// Update user
router.put('/update/:id', userController.updateUser);

// Delete user
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
