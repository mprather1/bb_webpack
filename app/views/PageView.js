var TableView = require("./TableView")
var SidebarView = require("./Sidebar")
var PageView = Backbone.Marionette.View.extend({
  tagName: "div",
  className: 'container-fluid',
  template: require('../templates/page-template.html'),
  regions: {
    body: {
      el: '#table-view'
    },
    sidebar: {
      el: '#sidebar-view'
    },
  },
  onRender: function(){
    this.showChildView('body', new TableView({
      collection: this.collection
    }));
    this.showChildView('sidebar', new SidebarView({
      collection: this.collection
    }));
  }
});

module.exports = PageView;