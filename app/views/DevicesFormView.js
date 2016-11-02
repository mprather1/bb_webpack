var Device = require("../models/Device");

var DevicesFormView = Backbone.Marionette.View.extend({
  template: require('../templates/devices-form-template.html'),
  initialize: function(){
    this.model = new Device();
    this.listenTo(Backbone, 'form:submit', this.submitDevicesForm);
    Backbone.Validation.bind(this, {
      model: this.model
    });
  },
  submitDevicesForm: function(){
    var facilityAttrs = {
      deviceType: $('#deviceType_input').val(),
      serialNumber: $('#serialNumber_input').val(),
      manufacturer: $('#manufacturer_input').val(),
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

module.exports = DevicesFormView;