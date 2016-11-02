String.prototype.capitalizedFirstLetter = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};

var DeviceView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  template: require("../templates/device-template.html"),
  // initialize: function(){
  // },
  // serializeData: function(){
  //   return {
  //     "firstName": this.model.attributes.firstName.capitalizedFirstLetter(),
  //     "lastName": this.model.attributes.lastName.capitalizedFirstLetter(),
  //     "phone": this.model.attributes.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
  //     "email": "<a href='mailto:" + this.model.attributes.email + "'>" + this.model.attributes.email + "</a>"
  //   };
  // }  
});

module.exports = DeviceView;