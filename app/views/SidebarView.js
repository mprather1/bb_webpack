var SidebarView = Backbone.Marionette.View.extend({
  tagName: 'ul',
  className: 'nav nav-pills nav-stacked',
  template: require('../templates/sidebar-template.html')
});

module.exports = SidebarView;