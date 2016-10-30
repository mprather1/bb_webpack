var UsersView = require("./UsersView");
var TableHeader = require("./TableHeader");
var TableFooter = require("./TableFooter")

var TableView = Backbone.Marionette.View.extend({
  initialize: function(){
    this.listenTo(Backbone, 'sort:users', this.sortUsers)
  },
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
    },
    footer: {
      el: '#panel-buttons',
      replaceElement: true
    }
  },
  onRender: function(){
    this.showChildView('head', new TableHeader({
    }))
    this.showChildView('body', new UsersView({
      collection: this.collection
    }));
    this.showChildView('footer', new TableFooter({
    }));
  },
  // sortUsers: function(flag){
  //   var name = flag.target.id;
  //   if (this.sortFlag === false){
  //     this.sortFlag = true;
  //     this.collection.setSorting(name, -1)
  //     this.collection.fullCollection.sort();
  //     this.collection.getFirstPage();
  //   } else {
  //     this.sortFlag = false;
  //     this.collection.setSorting(name, 1)
  //     this.collection.fullCollection.sort();
  //     this.collection.getFirstPage()
  //   }
  // },
});

module.exports = TableView;