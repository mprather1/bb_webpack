var TableView = require("./TableView")
var SidebarView = require("./Sidebar")
var PageView = Backbone.Marionette.View.extend({
  initialize: function(options){
    this.facilities = options.facilities

  },
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
      collection: this.collection,
      facilities: this.facilities
    }));
    this.showChildView('sidebar', new SidebarView({
      collection: this.collection
    }));
  }
});

module.exports = PageView;