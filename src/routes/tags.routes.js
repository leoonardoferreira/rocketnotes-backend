const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middleware/ensureAuthenticaticated");

const tagsRoutes = Router();
const tagsController = new TagsController();
// 'new' says that we are a creating a new instance for the controller, then alocating some space in the memory for it to be saved

tagsRoutes.get('/', ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;