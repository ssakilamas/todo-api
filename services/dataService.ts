import { dbService } from './dbService';

export class dataService {

  dbServiceObj: any

  constructor () {
    this.dbServiceObj = new dbService();
  }

  getTodos(context: any) {
    try {
      const todos = this.dbServiceObj.getTodos();
      context.res.status(200).json(todos);
    } catch (error) {
      context.res.status(500).send(error);
    };
  }

  addTodo(context: any) {
    try {
      const response = this.dbServiceObj.addTodo(context.req.body.task);
      context.res.status(200).json(response);
    } catch (error) {
      context.res.status(500).send(error);
    };
  }

  deleteTodo(context: any) {
    try {
      const response = this.dbServiceObj.deleteTodo(context.req.body.task.id);
      context.res.status(200).json(response);
    } catch (error) {
      context.res.status(500).send(error);
    };
  }

  editTodo(context: any) {
    try {
      const response = this.dbServiceObj.editTodo(context.req.body.task);
      context.res.status(200).json(response);
    } catch (error) {
      context.res.status(500).send(error);
    };
  }
}