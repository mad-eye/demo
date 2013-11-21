var fs = require('fs');
var _path = require("path");

var File = function(path) {
  this.path = path;
};

File.prototype.extension = function(){
  return _path.extname(this.path)
}

File.prototype.parse = function(){
  if (this.extension() == ".json"){
    this.data = JSON.parse(this.contents);
  }
};

File.prototype.read = function(callback){
//  var self = this;
  fs.readFile(this.path, 'utf-8', function(err, contents){
    this.contents = contents;
    callback();
  });
};

module.exports = File;
