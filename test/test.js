var File = require("../models/File");
var assert = require("assert");
describe('File', function(){
  describe("exension", function(){
    it("should compute the extension correctly for `package.json`", function(){
      var file = new File("package.json");
      assert.equal(file.extension(), ".json");
    });

    it("should compute the extension correctly for windows paths", function(){
      var file = new File("C:\\office\\config.ini");
      assert.equal(file.extension(), ".ini");
    });

    it("should return an empty string  when a file does not have an extension", function(){
      var file = new File("/tmp/README");
      assert.equal(file.extension(), "");
    });
  });

  describe('parse', function(){
    it('should be able to read and parse a simple JSON file', function(done){
      var file = new File("test/simple.json");
      file.read(function(){
        file.parse();
        assert.equal(file.data.foo, "bar");
        done();
      });
    });
  });
});
