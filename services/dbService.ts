export class dbService {

  private data = {
    todos: [
      {
          id: 1,
          taskName: 'First Task',
          assignee: "Test User One",
          status: "Todo"
      },
      {
          id: 2,
          taskName: 'Second Task',
          assignee: "Test User Two",
          status: "Todo"
      },
      {
          id: 3,
          taskName: 'Third Task',
          assignee: "Test User Three",
          status: "Completed"
      }
    ]
  }

  getTodos(): any {
    return this.data.todos;
  }

  addTodo(task): any {
    task.id = this.data.todos.length + 1;
    this.data.todos.push(task);
    return {
      message: "Task added",
      tasks: this.data.todos.length
    }
  }

  deleteTodo(id): any {
    this.data.todos = this.data.todos.filter(todo => todo.id != id);
    return {
      message: "Task deleted",
      tasks: this.data.todos.length
    }
  }

  editTodo(task): any {
    this.data.todos = this.data.todos.map(todo => {
      if ( todo.id === task.id ) {
        todo = task;
      }
      return todo;
    })
    return {
      message: "Task edited",
      tasks: this.data.todos.length
    }
  }
}