'use strict';
module.exports = {
  "options": {
    "banner": "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
  },
  "build": {
    "src": "firstproject/source/*.js",
    "dest": "firstproject/build/js/<%= pkg.name %>.min.js"
  }
}