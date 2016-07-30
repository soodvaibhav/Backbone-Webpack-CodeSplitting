var Backbone = require('backbone');
var Store = require("backbone.localstorage");
var TodoModel = require('../models/TodoModel');

var TodoList = Backbone.Collection.extend({
  model: TodoModel,
  localStorage: new Store("backbone-todo"),

  completed: function() {
    return this.filter(function(todo) {
      return todo.get('completed');
    });
  },

  remaining: function() {
    return this.filter(function(todo) {
      return !todo.get('completed');
    });
  }
});

module.exports = new TodoList();
