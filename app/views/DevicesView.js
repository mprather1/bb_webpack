var DeviceView = require("./DeviceView");
var DevicesView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: DeviceView,
  initialize: function(){
    this.listenTo(Backbone, 'header:nextpage', this.nextPage),
    this.listenTo(Backbone, 'header:prevpage', this.prevPage)
    this.listenTo(Backbone, 'header:firstpage', this.firstPage)
    this.listenTo(Backbone, 'header:lastpage', this.lastPage)
  },
  prevPage: function(){
    this.collection.getPreviousPage();
  },
  nextPage: function(){
    this.collection.getNextPage();
  },
  firstPage: function(){
    this.collection.getFirstPage();
  },
  lastPage: function(){
    this.collection.getLastPage();
  } 
});

module.exports = DevicesView;