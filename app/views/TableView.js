var UsersView = require("./UsersView");
var TableHeader = require("./TableHeader")

var TableView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: require('../templates/table-template.html'),
  regions: {
    head: {
      el: 'thead',
      replaceElement: true
    },
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  onRender: function(){
    this.showChildView('body', new UsersView({
      collection: this.collection
    }));
    this.showChildView('head', new TableHeader({
      
    }));
  }
});

module.exports = TableView;