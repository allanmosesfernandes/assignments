/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
    return this.todos;
  }

  getAll() {
    return this.todos;
  }

  remove(index) {
    if(!this.todos[index]) {
      console.log("No todo at this index");
      return this.todos;
    }
    this.todos = this.todos.filter((todo, i) => i !== index);
    // console.log("Your todo has been removed");
    return this.todos;
  }

  update(index, updatedTodo) {
    if(!this.todos[index]) {
      // console.log("No todo at this index");
      return this.todos;
    }
    this.todos[index] = updatedTodo;
    // console.log("Your todo has been updated");
    return this.todos;
  }
  clear() {
    this.todos = [];
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      return null;
    }
  }
// 
//   display() {
//     // console.log(this.todos);
//   }
}


module.exports = Todo;
