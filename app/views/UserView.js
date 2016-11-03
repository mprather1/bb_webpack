String.prototype.capitalizedFirstLetter = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};

var UserView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  template: require("../templates/user-template.html"),
  initialize: function(){
    console.log(this.model.attributes.email.toLowerCase())
  },
  serializeData: function(){
    return {
      "firstName": this.model.attributes.firstName.capitalizedFirstLetter(),
      "lastName": this.model.attributes.lastName.capitalizedFirstLetter(),
      "phone": this.model.attributes.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
      "email": "<a href='mailto:" + this.model.attributes.email + "'>" + this.model.attributes.email.toLowerCase() + "</a>"
    };
  }  
});

module.exports = UserView;