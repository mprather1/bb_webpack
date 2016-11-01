var FormView = require("./Form");

var SidebarView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: require("../templates/sidebar-template.html"),
  initialize: function(){
    this.listenTo(Backbone, 'form:cancel', this.render)
  },
  ui: {
    show: '.show-button',
  },
  // events: {
  //   'click @ui.show': 'showForm'
  // },
  regions: {
    body: {
      el: '.sidebar',
      replaceElement: true
    }
  },
  // showForm: function(){
  //   this.showChildView('body', new FormView({
  //     collection: this.collection
  //   }));
  // }
});

module.exports = SidebarView;