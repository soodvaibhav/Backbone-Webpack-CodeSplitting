var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var todoList = require('../collections/TodoList');
var TodoView = require('../views/TodoView');

module.exports = Backbone.View.extend({
  el: '#todoapp',
  initialize: function() {
    this.input = this.$('#new-todo');
    todoList.on('add', this.addOne, this);
    todoList.on('reset', this.addAll, this);
    todoList.fetch();
  },

  events: {
    'keypress #new-todo': 'createTodoOnEnter'
  },

  createTodoOnEnter: function(e) {
    if ( e.which !== 13 || !this.input.val().trim() ) {
      return;
    }
    todoList.create(this.attributes());
    this.input.val('');
  },

  attributes: function() {
    return {
      title: this.input.val().trim(),
      completed: false
    }
  },

  addOne: function(todo) {
    var view = new TodoView({model: todo});
    $('#todo-list').append(view.render().el)
  },

  addAll: function() {
    this.$('#todo-list').html('');
    switch(window.filter) {
      case 'pending':
        _.each(todoList.remaining(), this.addOne);
        break;
      case 'completed':
        _.each(todoList.completed(), this.addOne);
        break;
      default:
        todoList.each(this.addOne, this)
        break;
    }
  }
});
