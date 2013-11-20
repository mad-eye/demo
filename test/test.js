var assert = require("assert");
describe('File', function(){
  describe('parse', function(){
    it('should be able to parse a simple JSON file', function(){
      assert.equal(10, functions.length);
    });

    it("third function should return the third element", function(){
      assert.equal(elements[2],functions[2]());
    });
  });
});
