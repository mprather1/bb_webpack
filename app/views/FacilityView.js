String.prototype.capitalizedFirstLetter = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};

var FacilityView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  template: require("../templates/facility-template.html"),
  // initialize: function(){
  // },
  serializeData: function(){
    return {
      "facilityName": this.model.attributes.facilityName,
      "facilityNumber": this.model.attributes.facilityNumber,
      "phone": this.model.attributes.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
      "facilityLocation": this.model.attributes.facilityLocation
    };
  }  
});

module.exports = FacilityView;