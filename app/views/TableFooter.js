var TableFooter = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'panel-footer',
  template: require("../templates/table-footer-template.html"),
  events: {
    'click .prev-page': 'prevPage',
    'click .next-page': 'nextPage',
    'click .first-page': 'firstPage',
    'click .last-page': 'lastPage',
  },
  nextPage: function(){
    Backbone.trigger('header:nextpage')
  },
  prevPage: function(){
    Backbone.trigger('header:prevpage')
  },
  firstPage: function(){
    Backbone.trigger('header:firstpage')
  },
  lastPage: function(){
    Backbone.trigger('header:lastpage')
  },
});

module.exports = TableFooter;