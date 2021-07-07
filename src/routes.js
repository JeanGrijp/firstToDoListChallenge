const { Router } = require('express');

const userController = require('./controllers/userController');
const todoController = require('./controllers/todoController');
const loginController = require('./controllers/loginController');

const auth = require('./helpers/auth');

const router = Router();

router.route('/login').post(loginController.create)

router.route('/users')
  .get(userController.list)
  .post(userController.create);
router.route('/users/:id')
  .get(userController.detail)
  .delete(userController.delete);

router.route('/todos')
  .all(auth)
  .get(todoController.list)
  .post(todoController.create);
router.route('/todos/:id')
  .all(auth)
  .get(todoController.detail)
  .delete(todoController.delete);

module.exports = router;
