let maxNum = (arr) => {
    return arr.reduce((acc, num) =>  {
        return num > acc ? num : acc
    })
}
let arr = [1, 5, 9, 1, 76, 8, 9,80];
console.log(maxNum(arr));