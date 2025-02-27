// 1
const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

console.log(styles);

const medians = Math.round((styles.length) / 2);
styles[medians - 1] = "Classics";

console.log(styles);

console.log(styles.shift());

styles.unshift("Rap", "Reggae")
console.log(styles)

// 2

function sumInput() {
    let arr = [];
    let sum = 0;
   while (true) {
       let userNum = prompt("Please enter number:");
       
       if(userNum === null || userNum.trim() === "" || isNaN(userNum)) break
        arr.push(+userNum);
   }

    for (let element of arr) {
     sum += element
    }

    return console.log(sum)
}

sumInput()

// 3
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) partialSum = 0; 
  }

  return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );
console.log( getMaxSubSum([-2, -1, 1, 2]) );
console.log( getMaxSubSum([100, -9, 2, -3, 5]) );
console.log( getMaxSubSum([1, 2, 3]) );
console.log( getMaxSubSum([-1, -2, -3]) ); 