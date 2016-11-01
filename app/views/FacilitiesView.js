var FacilityView = require("./FacilityView");
var FacilitiesView = Backbone.Marionette.CollectionView.extend({
  // initialize: function(){
  //   this.facilites
  // },
  tagName: 'tbody',
  childView: FacilityView
})

module.exports = FacilitiesView