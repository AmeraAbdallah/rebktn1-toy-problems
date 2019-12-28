/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2, 
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

function evenOccurrence(arr){
    let storage = [];
    for(let i = 0; i < arr.length; i++){
        let found = false;
        let index = null;
        for(let j = 0; j < storage.length; j++){
            if(Object.is(storage[j]['val'], arr[i])){
                storage[j]['even'] = !storage[j]['even'];
                found = true;
                index = j;
            }
            if(typeof storage[j]['val'] === 'object' && deepEquals(storage[j]['val'], arr[i])){
                storage[j]['even'] = !storage[j]['even'];
                found = true;
                index = j;
            }
        }
        if(!found){
            storage.push({
                even: false,
                val: arr[i],
                firstIndex: index
            });
        }
    }
    let sorted = storage.sort((a, b) => a.firstIndex - b.firstIndex);
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i].even) return sorted[i].val;
    }
    return null;
}

//this function from prev toy problem
var deepEquals = function(apple, orange, o1 = undefined, o2 = undefined) {

    if (o1 && o1 === o2) return true;
    if (o1 && o1 !== o2) return false;
    for(var key in apple){
        if(!deepEquals(apple, orange, apple[key], orange[key]) && typeof apple[key] !=='object'){
        return false;
        }
        if(typeof apple[key] === 'object'){
        return deepEquals(apple[key], orange[key])
        }
    }
    return true;
}
