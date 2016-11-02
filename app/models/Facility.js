var Facility = Backbone.Model.extend({
  urlRoot: 'http://localhost:8000/api/facility',
  validation: {
    facilityName: {
      required: true
    },
    facilityNumber: {
      required: true,
      pattern: 'number',
      minLength: 3,
      maxLength: 3
    },
    facilityLocation: {
      required: true
    },
    phone: {
      required: true,
      pattern: 'number',
      minLength: 10,
      maxLength: 10
    }
},
});

module.exports = Facility;