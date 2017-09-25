'use strict';
module.exports = 
{
  "target": {
    "files": [
      {
        "expand": true,
        "cwd": "firstproject/build/css",
        "src": [
          "*.css",
          "!*.min.css"
        ],
        "dest": "firstproject/build/css",
        "ext": ".min.css"
      }
    ]
  }
}