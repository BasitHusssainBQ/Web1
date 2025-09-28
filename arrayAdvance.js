const arr = [20, 30, 1, 3, 9, 10, 340];

// const filterArrVal = (x) => x <= 10;
// const filterArrVal = function(x) {return x <= 10;};
// function filterArrVal(x) { return x <= 10; };

// const filterArr = arr.filter((x) => x < 20)
// const filterArr = arr.filter(function(x) {
//     return x < 20;
// })
// const filterArr = arr.filter(filterArrVal)

// console.log(filterArr)

// const strArr = ['A', 'B', 'C'];

// const filterStrArr = strArr.filter((item) => item !== 'B');

// console.log(filterStrArr)

const arrObj = [
    { name: 'A', subscription: false },
    { name: 'B', subscription: true },
    { name: 'C', subscription: true },
    { name: 'D', subscription: false },
    { name: 'E', subscription: true },
];

// const filterSubs = arrObj.filter((subs) => {
//     return !subs.subscription
// })

// console.log(filterSubs)

// const modfiedArr = arr.map((item) => item * 2);

// const updateSub = arrObj.map(item => {
//     if(item.name === 'B') {
//         return {
//             ...item,
//             subscription: false
//         }
//     }

//     return item
// })

// console.log(updateSub)


const score = [2, 3, 5, 60];

// const reduceArr = newArr.reduce((accumulator, current) => {
//     console.log(accumulator, current);
//     return accumulator + current;
// }, 0)

// const updateScore = score.reduce((acc, curr) => {
//     if(curr < 5 ) {
//         acc++
//     }

//     return acc;
// }, 0);

// console.log(updateScore)

const users = [
    {name: 'A', course: 'Web', fees: '100'},
    {name: 'B', course: 'Graphics', fees: '1000'},
    {name: 'A', course: 'ACIT', fees: '1200'},
    {name: 'D', course: 'Video Editing', fees: '900'},
];

// const calculateTotalFees = users.reduce((acc, curr) => {
//     if(curr.name === 'A') {
//         acc += +curr.fees
//     }

//     return acc;
// }, 0)

// console.log(calculateTotalFees)


// const sortArr = arr.sort((a,b) => b-a)
const sortArr = users.sort((a,b) => {
    if(+a.fees > +b.fees) {
        return 1;
    } else if (+b.fees < +a.fees) {
        return -1;
    } else {
        return 0;
    }
})

console.log(sortArr)

// filter -> array
// reduce -> value
// map -> array
// sort -> array
// find -> item