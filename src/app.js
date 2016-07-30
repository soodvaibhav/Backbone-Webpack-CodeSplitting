var $ = require('jquery');
var Backbone = require('backbone');
var Router = require('./router');
var AppView = require('./views/AppView');

const router = new Router();
const appView = new AppView();

Backbone.history.start();
