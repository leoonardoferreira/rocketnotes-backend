const { Router } = require("express");
const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middleware/ensureAuthenticaticated");

const notesRoutes = Router();
const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated)
// 'new' says that we are a creating a new instance for the controller, then alocating some space in the memory for it to be saved

notesRoutes.post('/', notesController.create);
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete);
notesRoutes.get('/', notesController.index);

module.exports = notesRoutes;