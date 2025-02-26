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
function truncate(str, maxlength) {
  let newStr = str.slice(0,maxlength - 1)
  if (str.length > maxlength) {
    return newStr + "..."
  }
  return str
}

console.log(truncate("Що я хотів би розповісти на цю тему:", 20))
console.log(truncate("Всім привіт!", 20))

// 4
function extractCurrencyValue(str) {
  return console.log(+str.slice(1))
}

extractCurrencyValue('$120')