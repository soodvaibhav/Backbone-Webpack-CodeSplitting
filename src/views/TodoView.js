var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('../templates/template')

module.exports = Backbone.View.extend({
  tagName: 'li',

  template: _.template(template.list),

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  events: {
    'dblclick label' : 'edit',
    'keypress .edit' : 'updateOnEnter',
    'blur .edit': 'close'
  },

  edit: function(e) {
    this.$el.addClass('editing');
    this.input.focus();
  },

  close: function() {
    var value = this.input.val().trim();
    if (value) {
      this.model.save({'title' : value});
    }
    this.$el.removeClass('editing');
  },

  updateOnEnter: function(e) {
    if (e.which == 13)
      this.close()
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.input = this.$('.edit');
    return this;
  }
});
