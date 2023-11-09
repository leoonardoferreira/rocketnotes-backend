const { Router } = require("express");
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require('../middleware/ensureAuthenticaticated');


const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
// 'new' says that we are a creating a new instance for the controller, then alocating some space in the memory for it to be saved

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);

module.exports = usersRoutes;