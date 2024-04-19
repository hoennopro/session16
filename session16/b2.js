"use strict";
function swapElements(arr, index1, index2) {
    if (index1 < 0 ||
        index1 >= arr.length ||
        index2 < 0 ||
        index2 >= arr.length) {
        console.error("Invalid index");
        return arr;
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let numbers = [1, 2, 3, 4, 5];
let swappedNumbers = swapElements(numbers, 1, 3);
console.log(swappedNumbers);
let strings = ["apple", "banana", "orange", "grape"];
let swappedStrings = swapElements(strings, 0, 2);
console.log(swappedStrings);
