var $ = require('jquery');
var Backbone = require('backbone');
var todoList = require('./collections/TodoList');

module.exports = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function(params) {
    params = params || '';
    window.filter = params.trim() || '';
    todoList.trigger('reset');
  }
});
