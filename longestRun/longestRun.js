/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string, result = {}, i = 0, next= 0,  current = string[0]) {
    if(string.length === 0){
        let max = [0, 0];
        for(let key in result){
            if(result[key][1] - result[key][0] > max[1] - max[0]){
                max = result[key];
            }
        }
        return max;
    }
    string = string.substr(1);
    if(result[current+next] && current === string[0]){
        result[current+next][1] = i+1;
    } else if(current === string[0]){
        result[current+next] = [i, i+1]
    }
    if(current !== string[1]){
        next++;
    }
    return longestRun(string, result, ++i, next);
}
