var TableFooter = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'panel-footer',
  template: require("../templates/table-footer-template.html")
});

module.exports = TableFooter;