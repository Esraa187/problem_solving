let evenNumbers = (arr)=>{
    return arr.filter( num => num % 2 === 0 )
}
let arr = [6, 5, 8, 86, 9, 2, 8, 28];

console.log(evenNumbers(arr))








// function evenNumbers(nums) {
//     let evenArray = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             evenArray.push(nums[i]);
//         }
//     }
//     console.log(evenArray);
// }

// let arr = [6, 5, 8, 86, 9, 2, 8, 28];
// evenNumbers(arr); 
