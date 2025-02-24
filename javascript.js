// 1
function readNumber() {
  let num;

  do {
    num = prompt("Введіть число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);


// 2

function random( max) {
  return  Math.random() * max;
}

console.log( random(5) );
console.log( random(5) );
console.log(random(5));

// 3

function randomInteger(min, max) {
  const num = min + Math.random() * (max-min)
  return Math.round(num)
}

console.log( randomInteger(1, 10) );
console.log( randomInteger(1, 10) ); 
console.log( randomInteger(1, 10) ); 