var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  deviceType: String,
  serialNumber: String,
  manufacturer: String,
});

DeviceSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Device', DeviceSchema);
