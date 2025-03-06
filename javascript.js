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

//4
function copySorted(arr) {
  const result = arr.slice().sort()
  return console.log(result)
}

copySorted(["HTML", "JavaScript", "CSS"])

//5

const userArray = [{ name: "Іван", age: 25 },
  { name: "Петро", age: 30 },
  { name: "Марія", age: 28 }
]

function getNameArray() {
  const result = userArray.map(user => user.name);

return console.log(result)
}
getNameArray();

//6
const userArr = [{ name: "Іван", surname: "Іванко", id: 1 },
  { name: "Петро", surname: "Петренко", id: 2 },
  { name: "Марія", surname: "Мрійко", id: 3 }
]



  const result= userArr.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
  }))

console.log(result)

//7
const children = [{ name: "John", age: 25 },{ name: "Pete", age: 30 },{ name: "Mary", age: 29 }];

const arr = children.reduce((prev, user) => prev + user.age, 0) / children.length;

console.log(arr)

//8
