# Nightjar Profanity - Swearword detection and replacement library

This library provides a way to detect swearwords and with ability to censor or replace words too. 

We try keep the list of swearwords updated, so if you have any suggestions, please email us at info@nightjar.io.

## Installation

    npm install --save @nightjar-io/nightjar-profanity
    
## Usage

### profanity.checkText(text)

Returns true if given text string contains profanity;

    var profanity = require('nightjar-profanity');
    profanity.checkText('You are a nice person.'); // false
    profanity.checkText('You are a bastard.'); // true
    
### profanity.loadWords(name)

Default words list is 'en' English Swearwords. To change this, you can load a different list. If you want to change back to the default, you'll need to load the 'en' words list again.
    
    var profanity = require('nightjar-profanity');
    profanity.loadWords('fr');
    profanity.checkText('Tu es une bonne personne.'); // false
    profanity.checkText('.'); // true
    
### profanity.loadWordsArray(words)   

If you want to use your own list of words, you can load in a list of words in an array.

    var profanity = require('nightjar-profanity');
    profanity.loadWordsArray([ 'nice', 'fun', 'happy', 'cheerful', 'joyful', 'sunny' ]);
    profanity.checkText('You are a nice person.'); // true
    profanity.checkText('You are a bastard.'); // false
    
Probably not that useful for words like happy. Useful, if we don't have a list of words in this library.