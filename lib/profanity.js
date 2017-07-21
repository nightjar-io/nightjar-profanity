const defaultWords = 'en';

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
                break;
            }
        }
        
        return false;
        
    }
    
};