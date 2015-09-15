import {
    TodoItem
}
from './TodoItem';

function TodoService() {


    this.todos = [
        new TodoItem('Learn Angular 1.0', true),
        new TodoItem('Learn Angular 2.0'),
        new TodoItem('Learn AtScript')
    ];


    this.add = function(todo) {
        this.todos.push(todo);
    }

    this.remove = function(todo) {
        let index = this.todos.indexOf(todo);
        let removedItem = this.todos.splice(index, 1);
        return removedItem;
    }

    this.getAll = function() {
        return this.todos;
    }

    this.clearAll = function() {
        // with this.todos = [] the TodoCtrl.items would have an old reference
        // and no update would take place
        this.todos.length = 0;
    }

}

export {
    TodoService
};
