let removeDuplicates = (arr) => {
    return arr.filter((num, index) => arr.indexOf(num) === index);
}
 
let numbers = [1, 5, 9, 1, 76, 8, 9, 8];
console.log(removeDuplicates(numbers));  
