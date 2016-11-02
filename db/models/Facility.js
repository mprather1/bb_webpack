var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var FacilitySchema = new Schema({
  facilityName: String,
  facilityNumber: String,
  phone: String,
  facilityLocation: String,
});

FacilitySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Facility', FacilitySchema);
