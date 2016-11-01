var UsersView = require("./UsersView");
var FacilitiesView = require("./FacilitiesView");
var TableHeader = require("./TableHeader")
var TableFooter = require("./TableFooter");

var TableView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: require('../templates/table-template.html'),
  initialize: function(options){
    this.facilities = options.facilities
    this.listenTo(Backbone, 'sort:users', this.sortUsers),
    this.listenTo(Backbone, 'show:users', this.showUsers)
    this.listenTo(Backbone, 'show:facilities', this.showFacilities)
  },
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
    // this.showChildView('body', new UsersView({
    //   collection: this.collection
    // }));
    this.showChildView('head', new TableHeader({
      
    }));
    this.showChildView('footer', new TableFooter({
      
    }))
  },
  showUsers: function(){
    this.showChildView('body', new UsersView({
      collection: this.collection
    }));
  },
  showFacilities: function(){
    this.showChildView('body', new FacilitiesView({
      collection: this.facilities
    }));
  },
  sortUsers: function(flag){
    var name = flag.target.id;
    if (this.sortFlag === false){
      this.sortFlag = true;
      this.collection.setSorting(name, -1)
      this.collection.fullCollection.sort();
      this.collection.getFirstPage();
    } else {
      this.sortFlag = false;
      this.collection.setSorting(name, 1)
      this.collection.fullCollection.sort();
      this.collection.getFirstPage()
    }
  },
});

module.exports = TableView;