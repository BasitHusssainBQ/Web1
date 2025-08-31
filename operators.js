const x = 1;
const y = 2;

const add = x + y;
const sub = x - y;
const mul = x * y;
const div = x / y;
const rem = 5%2;
const inc = x++; // x + 1;
const dec = x--; // x - 1
const preInc = ++x; // 1 + x
const preDec = --x; // 1 - x

console.log(x + " + " + y + " = " + add)
console.log(x + " - " + y + " = " + sub)
console.log(x + " x " + y + " = " + mul)
console.log(x + " / " + y + " = " + div)
console.log(5 + " % " + 2 + " = " + rem)
console.log(2++, 'Post Increment')
console.log(++2, 'Pre Increment')
console.log(2--, 'Post Decrement')
console.log(--2, 'Pre Decrement')
console.log(2**3, 'Power')