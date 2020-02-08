// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

// You've got Helpers!
// myHelper(x, y)

// Examples
// input: [ 20, -10, -10, 2, 4, 299 ]
// Output:	[ -10, -10, 2, 4, 20, 299 ]

//Algorithm from wikipedia
// procedure bubbleSort(A : list of sortable items)
//     n := length(A)
//     repeat
//         newn := 0
//         for i := 1 to n - 1 inclusive do
//             if A[i - 1] > A[i] then
//                 swap(A[i - 1], A[i])
//                 newn := i
//             end if
//         end for
//         n := newn
//     until n ≤ 1
// end procedure


function bubbleSort(input) {
    let n = input.length;
    let newN = 0;
    for(let i = 0; i < n-1; i++){
        if (input[i - 1] > input[i]) {
            [input[i-1], input[i]] = [input[i], input[i-1]];
            newN = i;
        }
    }
    n = newN;
    if(n > 1){
        return bubbleSort(input)
    }
    return input;
}
