var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FacilitySchema = new Schema({
  facility_name: String,
  facility_number: String,
  phone: String,
  location: String,
});

module.exports = mongoose.model('Facility', FacilitySchema);
