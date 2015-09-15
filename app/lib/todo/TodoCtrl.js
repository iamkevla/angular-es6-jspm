import {TodoItem} from './TodoItem';

function TodoCtrl (growl, TodoService) {

    this.items = TodoService.getAll();
    this.newTodo = '';


  this.addTodo = function() {
    let anItem = new TodoItem(this.newTodo);
    growl.info(anItem.toString()+' added', {ttl: 2000});
    TodoService.add(anItem);
    this.newTodo = '';
  }

  this.removeTodo = function(item) {
    let removed = TodoService.remove(item);
    growl.warning(removed.toString()+'removed', {ttl: 2000});
  }

  this.clearAll = function() {
    TodoService.clearAll();
    growl.error('All Clear', {ttl: 2000});
  }

}

TodoCtrl.$inject = ['growl', 'TodoService'];

export { TodoCtrl }
