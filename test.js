var assert = require("assert");
describe('Scoping', function(){

  var elements = [0,1,2,3,4,5,6,7,8,9];
  var functions = [];

  before(function(){
    elements.forEach(function(element){
      functions.push(function(){
        return element;
      });
    });

    // for(var i = 0; i < elements.length; i++) {
    //   (function(){
    //     var element = elements[i];
    //     functions.push(function() {
    //       console.log("the index is", i);
    //       return element;
    //     });
    //   })();
    // }
  });

  describe('functions array', function(){
    it('should have 10 elements', function(){
      assert.equal(10, functions.length);
    });

    it("third function should return the third element", function(){
      assert.equal(elements[2],functions[2]());
    });
  });
});
