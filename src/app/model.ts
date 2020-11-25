export class Task {
  title;
  tasks;

  constructor() {
    this.title = 'To Do App';
    this.tasks = [
      new TodoItem('Create Form' , false),
      new TodoItem('Make Submit' , false),
    ];
  }
}

export class TodoItem {
  name;
  action;

  constructor(name = '', action = false) {
    this.name = name;
    this.action = action;
  }

}
