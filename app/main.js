var Marionette = require('marionette');
var User = require("./models/User");
var Users = require("./collections/Users");
var PageView = require("./views/PageView");

var user = new User({firstName: 'Mike', lastName: 'Prather', phone: '1112223333', email: 'mprather@example.com'});
var users = new Users([
  {"firstName":"dudley","lastName":"barton","email":"dudley-barton@example.com","phone":"9233611803","phone_sort_id":"923"},
  {"firstName":"devonte","lastName":"zemlak","email":"devonte-zemlak@example.com","phone":"9932411611","phone_sort_id":"993"},
  {"firstName":"tremaine","lastName":"johnston","email":"tremaine-johnston@example.com","phone":"2138974032","phone_sort_id":"213"},
  {"firstName":"kariane","lastName":"vonrueden","email":"kariane-vonrueden@example.com","phone":"1925331755","phone_sort_id":"192"},
  {"firstName":"shaylee","lastName":"murphy","email":"shaylee-murphy@example.com","phone":"6991123323","phone_sort_id":"699"},
  {"firstName":"selina","lastName":"muller","email":"selina-muller@example.com","phone":"9704309261","phone_sort_id":"970"},
  {"firstName":"alford","lastName":"stanton","email":"alford-stanton@example.com","phone":"5460264965","phone_sort_id":"546"}
]);

var pageView = new PageView({
 collection: users
});

var directory = new Marionette.Application({
  region: "#main"
});

directory.showView(pageView);