const defaultWords = 'en';
const defaultReplaceChar = '*';

module.exports = {

    words: require('../words/' + defaultWords + '.json'),
    
    loadWords : function(name) {
        
        this.words = require('../words/' + name + '.json');    
        
    },
    
    loadWordsArray : function(words) {
        
        this.words = words;    
        
    },
    
    checkText : function(text) {
    
        const regex = /[\w]+/ig;
        
        while (match = regex.exec(text)) {
            
            let word = match[0].toLowerCase();
            let i = this.words.indexOf(word);
            
            if (i > 0) {
                return true;
            }
        }
        
        return false;
        
    },
    
    censorText : function(text, replace) {
        
        const regex = /[\w]+/ig;
        let censoredText = text;
        
        // Offset is used to get right word index if we replace a word with a shorter version. Say a different word.
        let offset = 0;
        
        while (match = regex.exec(text)) {
            
            let word = match[0].toLowerCase();
            let i = this.words.indexOf(word);
            
            if (i > 0) {
                
                let replacementWord = match[0].substr(0, 1);
                if (replace && replace.constructor === Array) {
                    
                    // If the replace is more than what's available in the array, then let's extend it.
                    if (match[0].length - 2 > replace.length) {
                        replace = repeatArray(replace, match[0].length - 2); 
                    }
                    
                    replacementWord += replace.slice(0, match[0].length - 2).join('');
                    
                } else if (replace) {
                    replacementWord += replace.repeat(match[0].length - 2);
                } else {
                    replacementWord += defaultReplaceChar.repeat(match[0].length - 2);
                }
                replacementWord += match[0].substr(match[0].length - 1);
                
                censoredText = replaceAtPosition(censoredText, match[0], replacementWord, match.index - offset);
                
                offset += match[0].length - replacementWord.length;
          
            }
        }
        
        return censoredText;
        
    }
    
};

function replaceAtPosition(text, word, replacement, index) {
    
    return text.substr(0, index) + replacement + text.substr(index + word.length);
    
}

function repeatArray(arr, count) {
      
    var ln = arr.length;
    var b = new Array();
    for(i=0; i<count; i++) {
        b.push(arr[i%ln]);      
    }
    return b;
      
}