var UsersView = require("./UsersView");
var FacilitiesView = require("./FacilitiesView");
var DevicesView = require("./DevicesView");
var AdminView = require("./AdminView")
var TableHeader = require("./TableHeader");
var TableFooter = require("./TableFooter")


var PanelView = Backbone.Marionette.View.extend({
  initialize: function(options){
    this.heading = options.heading
    this.users = options.users,
    this.facilities = options.facilities,
    this.devices = options.devices,
    
    this.listenTo(Backbone, 'sort:collection', this.sortCollection)
  },
  serializeData: function(){
    return {
      'heading': this.heading
    }
  },
  tagName: 'div',
  className: 'panel panel-primary',
  template: require("../templates/panel-template.html"),
  regions: {
    main: {
      el: '.panel-body',
      replaceElement: false
    },
    thead: {
      el: 'thead',
      replaceElement: true
    },
    tbody: {
      el: 'tbody',
      replaceElement: true
    },
    navbuttons: {
      el: '.panel-buttons'
    }
  },
  onRender: function(){
    if (this.heading === "Users"){
      this.showChildView('thead', new TableHeader({
        template: require("../templates/user-table-header-template.html")
      }))
      this.showChildView('tbody', new UsersView({
        collection: this.collection
      }))
    }
    if (this.heading === "Devices"){
      this.showChildView('thead', new TableHeader({
        template: require("../templates/device-table-header-template.html")
      }))
      this.showChildView('tbody', new DevicesView({
        collection: this.collection
      }))  
    }
    if (this.heading === "Facilities"){
            this.showChildView('thead', new TableHeader({
        template: require("../templates/facility-table-header-template.html")
      }))
      this.showChildView('tbody', new FacilitiesView({
        collection: this.collection
      }))  
    }
    if (this.heading === "Admin"){
      this.showChildView('main', new AdminView({
        users: this.users,
        facilities: this.facilities,
        devices: this.devices
      })); 
    }
    if(this.heading != "Admin" && this.heading != "Home"){
      this.showChildView('navbuttons', new TableFooter());
    }
  },
  sortCollection: function(flag){
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

module.exports = PanelView;
