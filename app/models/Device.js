var Device = Backbone.Model.extend({
  urlRoot: 'http://localhost:8000/api/devices'
});

module.exports = Device;