
var slaer  = require('../dist/slaer-core.js'),
    assert = require('assert');

beforeEach(function() {
  slaer.wipeCleanAndStartAgain();
})

describe('adding a new component', function() {
  context('when not already exists', function() {
    it('must add it to the registry', function() {
      slaer.component('test', { hello: "world!" });
    })
  })
  context('when already exists', function() {
    it('must overwrite the existing entry', function() {
      slaer.component('test', { hello: "world!" });
      slaer.component('test', { hello: "world! - overwritten?" });

      assert(slaer.component('test').hello === "world! - overwritten?");
    })
  })
})
