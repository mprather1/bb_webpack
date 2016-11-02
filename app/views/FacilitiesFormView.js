var Facility = require("../models/Facility");

var FacilitiesFormView = Backbone.Marionette.View.extend({
  template: require('../templates/facilities-form-template.html'),
  initialize: function(){
    console.log(this.collection)
    this.model = new Facility();
    this.listenTo(Backbone, 'form:submit', this.submitFacilitiesForm);
    Backbone.Validation.bind(this, {
      model: this.model
    });
  },
  submitFacilitiesForm: function(){
    var facilityAttrs = {
      facilityName: $('#facilityName_input').val(),
      facilityNumber: $('#facilityNumber_input').val(),
      facilityLocation: $('#facilityLocation_input').val(),
      phone: $('#phone_input').val()
    };
    this.model.set(facilityAttrs);
    if(this.model.isValid(true)){
      this.model.save();
      this.collection.add(this.model);
      Backbone.Validation.unbind(this);
      Backbone.trigger('form:cancel')
    }
  }
});

module.exports = FacilitiesFormView;