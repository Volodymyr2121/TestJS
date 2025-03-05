// 1
function camelize(str) {
  const arr = str.split("-");
  const arrLowerCase = arr.map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1));
  const result = arrLowerCase.join("")
  
  return console.log(result)
};

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

//2
const filterRange = (arr, a, b) => {
  const result = arr.filter(item => item >= a && item <= b)
  
  console.log(result)
};

filterRange([5, 3, 8, 1], 1, 4)

// 3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
console.log(arr)
}

filterRangeInPlace([5, 3, 8, 1], 1, 4);