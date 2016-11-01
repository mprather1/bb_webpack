var UserView = require("./UserView");
var UsersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: UserView,
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

module.exports = UsersView;