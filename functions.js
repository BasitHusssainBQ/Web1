// Regular Function
function add(x, y) {
    console.log(x + y)
}

// Function Expression
const sum = function (val1, val2) {
    console.log(val1 + val2)
}

const calc = function (val1, val2, operation) {
    let result;

    if (typeof val1 !== 'number' || typeof val2 !== 'number') {
        console.log('Please add correct number');
        return;
    }

    switch (operation) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            result = val1 / val2;
            break;
    }
    console.log(val1 + " " + operation + " " + val2 + ' ' + "= " + result);
}

const func = (x, y) => console.log(x + y);

// func(2,2)
// sum(1,4)
// calc(2, 2, "*")
// calc(2, 2, "+")
// calc(2, 2, "-")

function generateRandomValues (length) {
    let result;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    for (let i = 0; i <= length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    console.log(result, 'result')

    return result;
}

function generatePassword(length) {
    if (length >= 8 && length <= 16) {
        const passValue = generateRandomValues(length);
        return ('Password is too strong -->', passValue)
    }
    else if (length >= 6 && length <= 8) {
        const passValue = generateRandomValues(length);
        return ('Password is medium -->', passValue)
    } else if (length >= 3 && length <= 6) {
        console.log('test')
        const passValue = generateRandomValues(length);
        return ('Password is too weak -->', passValue)
    } else {
        return 'Please add valid password'
    }
}

// const getPass = generatePassword(3);
// console.log(getPass)

function goodMorning (func) {
    console.log('Good Morning');
    func();
}

const goodEvening = function () {
    console.log('Good Evening')
}

// goodMorning(goodEvening)

// closure
// let a = 9;
// const addValue = function (x) {
//     let y = x;
//     return (y) => y + x;
// }

// const val = addValue(2);
// const val1 = val(2);
// const val2 = val(3);

// console.log(val2)


// let counter = 0;

// Function to increment counter
// function add() {
//   counter += 1;
// }

// add();
// add();
// add();
// console.log(counter)

const counter = () => {
    let count = 0;
    return () => ++count;
}
const getCounter = counter();
getCounter(); // 1
getCounter(); // 1+1 
const x = getCounter(); // 2 + 1
console.log(x)
