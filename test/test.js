var assert = require('assert');

describe('check text for swearwords', function () {
    
    var profanity = require('../lib/profanity.js');
    
    it('should not detect a swearwords', function () {
        assert.equal(profanity.checkText('You are a nice person.'), false);
    });
    
    it('should detect a swearword', function () {
        assert.equal(profanity.checkText('You are a bastard.'), true);
    });

    it('should detect camelcase swearwords and return true', function () {
        assert.equal(profanity.checkText('sHIt.'), true);
    });
    
    it('should detect uppercase swearwords and return true', function () {
        assert.equal(profanity.checkText('SHIT.'), true);
    });
    
});