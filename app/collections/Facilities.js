var Facility = require("../models/Facility");

var PageableCollection = require("backbone.paginator");
 var Facilities = Backbone.PageableCollection.extend({
  url: 'http://68.103.65.157:8000/api/facilities',
  mode: 'client',
  model: Facility,
  state: {
    pageSize: 14,
    sortKey: 'id',
    order: 1
  },
  queryParams: {
    totalPages: null,
    totalRecords: null,
  },
}); 

module.exports = Facilities;