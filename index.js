var libxmljs = require("libxmljs");
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var Buffer = require('buffer').Buffer;


const PLUGIN_NAME = "gulp-resx2";
module.exports = function(file, opt) {
  if (!file) {
    throw new PluginError(PLUGIN_NAME, 'Missing file option for gulp-resx2');
  }
  opt = opt || {};

  function doConvert(file) {
    var xml = file.contents;
    var xmlDoc = libxmljs.parseXml(xml);
    var rootNode = xmlDoc.root();

    var resourceObject = {};
    var valueNodes = rootNode.find("data");
    valueNodes.forEach(function(element) {
      var name = element.attr("name").value();
      var value = element.get("value").text();
      resourceObject[name] = value;
    });

    return JSON.stringify(resourceObject);
  }

  function throughCallback(file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME,  'Streaming not supported'));
      return cb();
    }

    if(file.isBuffer()) {
      file.contents = new Buffer(doConvert(file));
    }

    this.push(file);
  }

  return through.obj(throughCallback);
};
