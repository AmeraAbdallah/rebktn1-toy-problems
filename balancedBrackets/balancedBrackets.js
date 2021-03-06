/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
    var brackets = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] === '('){
            brackets.push('(');
        }
        if(str[i] === '['){
            brackets.push('[');
        }
        if(str[i] === '{'){
            brackets.push('{');
        }
        if(str[i] === ')'){
            if(brackets.pop() !== '(') return false; 
        }
        if(str[i] === ']'){
            if(brackets.pop() !== '[') return false; 
        }
        if(str[i] === '}'){
            if(brackets.pop() !== '{') return false; 
        }
    }
    return !brackets.length;
};
