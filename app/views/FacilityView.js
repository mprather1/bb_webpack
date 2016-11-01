var FacilityView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  template: require("../templates/facility-template.html")
});

module.exports = FacilityView;