const Todo = require('../models/TodoSchema');

module.exports = {
  list: async (req, res, next) => {
    const { userId } = req;

    try {
      const todos = await Todo.find({ userId });
      res.locals.message = todos;

      return next();
    } catch (error) {
      return next(error);
    }
  },
  create: async (req, res, next) => {
    const { userId } = req;

    try {
      const todo = await Todo.create({ ...req.body, userId });

      res.locals.message = todo;

      return next();
    } catch (error) {
      return next(error);
    }
  },
  detail: async (req, res, next) => {
    try {
      const todo = await Todo.findById(req.params.id);

      if (!todo) {
        res.locals.status = 404;
        return next({ message: 'Todo not found' });
      }

      if (todo.userId.toString() !== req.userId) {
        res.locals.status = 403;
        
        return next({ message: 'You don\'t have permission to get this todo' });
      }

      res.locals.message = todo;

      return next();
    } catch (error) {
      return next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);

      res.locals.message = 'Deleted successfully';

      return next();
    } catch (error) {
      return next(error);
    }
  },
};
