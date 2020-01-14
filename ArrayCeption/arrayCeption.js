// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

function findDeepestLevel(array, level = 2) {
    if(array.length === 1 && !Array.isArray(array[0])){
        return level;
    }

    if(array.length === 1 && !Array.isArray(array[0]) && !array[0]){
        return 0;
    }

    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            level = level + 1;
            return findDeepestLevel(array[i], level);
        }
    }
}

function arrayCaption(array){
    let result = [0];
    for(var i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            let levelDeep = findDeepestLevel(array[i]);
            if(levelDeep){
                result.push(levelDeep);
            }
        }
    }
    return Math.max(...result);
}