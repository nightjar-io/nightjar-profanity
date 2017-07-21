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

describe('censor swearwords in text', function () {
    
    var profanity = require('../lib/profanity.js');
    
    it('should not replace any words in text', function () {
        assert.equal(profanity.censorText('You are a nice person.'), 'You are a nice person.');
    });
    
    it('should censor all swearwords in text', function () {
        assert.equal(profanity.censorText('You are a bastard and sometimes shit. Basically an asshole.'), 'You are a b*****d and sometimes s**t. Basically an a*****e.');
    });
    
    it('should censor all camelcase swearwords in text', function () {
        assert.equal(profanity.censorText('You are a bAstARd and sometimes sHIt. Basically an asshole.'), 'You are a b*****d and sometimes s**t. Basically an a*****e.');
    });
    
    it('should censor all uppercase swearwords in text', function () {
        assert.equal(profanity.censorText('You are a BASTARD and sometimes SHIT. Basically an asshole.'), 'You are a B*****D and sometimes S**T. Basically an a*****e.');
    });
    
    it('should censor all swearwords in text with dots', function () {
        assert.equal(profanity.censorText('You are a bastard and sometimes shit. Basically an asshole.', '.'), 'You are a b.....d and sometimes s..t. Basically an a.....e.');
    });
    
    it('should censor all swearwords in text with a question mark and hash', function () {
        assert.equal(profanity.censorText('You are a bastard and sometimes shit. Basically an asshole.', '?#'), 'You are a b?#?#?#?#?#d and sometimes s?#?#t. Basically an a?#?#?#?#?#e.');
    });
    
    it('should censor all swearwords in text with a symbols from array', function () {
        assert.equal(profanity.censorText('You are a bastard and sometimes shit. Basically a motherfucker.', ['@','#','&','$','!']), 'You are a b@#&$!d and sometimes s@#t. Basically a m@#&$!@#&$!r.');
    });
    
    it('should censor all swearwords in text with a symbols from array, with double characters', function () {
        assert.equal(profanity.censorText('You are a bastard and sometimes shit. Basically a motherfucker.', ['@.','#.','&.','$.','!.']), 'You are a b@.#.&.$.!.d and sometimes s@.#.t. Basically a m@.#.&.$.!.@.#.&.$.!.r.');
    });

});