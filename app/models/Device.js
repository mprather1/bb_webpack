var Device = Backbone.Model.extend({
  urlRoot: 'http://localhost:8000/api/devices',
  validation: {
    deviceType: {
      required: true
    },
    serialNumber: {
      required: true,
      pattern: 'number'
    },
    manufacturer: {
      required: true,
    }
  },
});

module.exports = Device;