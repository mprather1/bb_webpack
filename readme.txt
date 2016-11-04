Here is an unfinished project that I have been working on for about two weeks. I work IT for a large company that has facilities spread out over the entire state of Kansas and it is difficult to find other employee's phone numbers, what facility they work in, etc.. I really have no intention of using this at work because it is probably overkill creating a full stack web application just for a phone directory. It is just a personal project intended as an exercise to learn more about JavaScript development.

Tested on Ubuntu 15.10 # not guaranteed to run on other operating systems
Requires webpack, bower, npm, mongodb *database location details in _config.js

Instructions:
1. npm install
2. webpack -p
3. bower install
4. copy app/public to app/static * this is a step that will be eliminated in the future
5. node server.js
optional: seed # to create seeds in database if node-mongo-seeds is installed and seed file generator has been run

Connect to app on port listed in console.

Instructions for seed file generator

Seed file generator is located in the seeds folder. It is not intended to be production code. It will generate seed files that contain an error, which is a comma at the end of the array of objects. This comma will need to be removed from the seed files before the seed command is executed. Seed file generator can be run by typing "ruby seeds/seed_file_generator.rb"
