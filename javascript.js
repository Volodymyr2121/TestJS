// 1
function ucFirst(str) {
  
  return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst("василь"));

// 2

function checkSpam(str) {
  const newStr =str.toLowerCase()
  return newStr.includes("viagra") || newStr.includes("xxx")
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx') )
console.log(checkSpam("innocent rabbit"))

// 3