// for (let i = 0; i < 3; i++) {
//     console.log(i)
// }

// i = 0 - condition - 0 < 3 -> T - print 0 - i++ -> 0 + 1
// i = 1 - 1 < 3 - T - print 1 - i++ -> 1 + 1 = 2
// i = 2 - 2 < 3 - T - print 2 - i++ -> 2 + 1 = 3
// i = 3 - 3 < 3 - F - Loop Exit

let x = 2;
for (; x >= 0;) {
    console.log(x)
    x--;
}

// x = 2 -> 2 >= 0 = T -> 2 - 1 = 1
// x = 1 -> 1 >= 0 = T -> 1 - 1 = 0
// x = 0 -> 0 >= 0 = T -> 0 - 1 = -1
// x = -1 -> -1 >= 0 - F -> Loop Exit

// let y  = 0;
// while(y <= 2) {
//     console.log(y);
//     y++;
// }

// let z  = 2;
// while(y >= 0) {
//     console.log(y);
//     y--;
// }

// y = 0 -> 0 <= 2 -> T -> print 0 -> 0 + 1 = 1
// y = 1 -> 1 <= 2 -> T -> print 1 -> 1 + 1 = 2
// y = 2 -> 2 <= 2 -> T => print 2 => 2 + 1 = 3
// y = 3 -> 3 <= 2 -> F -> Exit

// let x = 2;

// do {
//     console.log(x);
//     x--;
// }

// while(x >= 0) 

    // 1 >= 5 => Exit

// x = 2 -> print 2 -> 2 - 1 = 1 => 1 >= 0 => T
// x = 1 -> print 1 -> 1 - 1 = 0 => 0 >= 0 => T
// x = 0 -> print 0 -> 0 - 1 = 0 => -1 >= 0 = F => Exit