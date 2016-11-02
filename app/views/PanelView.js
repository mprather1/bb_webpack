var UsersView = require("./UsersView");
var FacilitiesView = require("./FacilitiesView");
var DevicesView = require("./DevicesView");
var AdminView = require("./AdminView")
var TableHeader = require("./TableHeader");


var PanelView = Backbone.Marionette.View.extend({
  initialize: function(options){
    this.heading = options.heading
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
      this.showChildView('tbody', new AdminView())  
    } 
  }
});

module.exports = PanelView;
