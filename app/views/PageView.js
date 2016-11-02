var SidebarView = require("./SidebarView");
var PanelView = require("./PanelView");

var PageView = Backbone.Marionette.View.extend({
  
  tagName: 'div',
  
  className: 'container-fluid',
  
  template: require("../templates/page-template.html"),
  
  initialize: function(options){
    
    this.users = options.users,
    this.facilities = options.facilities,
    this.devices = options.devices,
    
    this.listenTo(Backbone, 'show:users', this.showUsers),
    this.listenTo(Backbone, 'show:facilities', this.showFacilities),
    this.listenTo(Backbone, 'show:devices', this.showDevices),
    this.listenTo(Backbone, 'show:admin', this.showAdmin)
  },
  
  regions: {
    body: {
      el: '#main-view'
    },
    sidebar: {
      el: '#sidebar-view'
    }
  },
  
  onRender: function(){
    this.showChildView('sidebar', new SidebarView({
      
    }));
    this.showChildView('body', new PanelView({
      heading: 'Home',
    }))
  },
  
  showUsers: function(){
    this.showChildView('body', new PanelView({
      heading: "Users",
      collection: this.users
    }))
  },
  
  showFacilities: function(){
    this.showChildView('body', new PanelView({
      heading: "Facilities",
      collection: this.facilities
  }))
  },
  
  showDevices: function(){
    this.showChildView('body', new PanelView({
      heading: "Devices",
      collection: this.devices
  }))
  },
  
  showAdmin: function(){
    this.showChildView('body', new PanelView({
      heading: "Admin",
      collection: this.users
  }))
  }
  
})

module.exports = PageView;