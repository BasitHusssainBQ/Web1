// if(false) {
//     console.log('Run')
// }

// if(false) {
//     console.log('Run')
// } else {
//     console.log('Invalid')
// }

// if(false) {
//     console.log('Run')
// } else if(false) {
//     console.log('First Invalid')
// } else if (false) {
//     console.log('Second Invalid')
// } 

// if(false) {
//     console.log('Run')
// } else if(false) {
//     console.log('First Invalid')
// } else if (false) {
//     console.log('Second Invalid')
// } else {
//     console.log('Invalid all conditions')
// }

const password = 'abc12345';

if(password.length >= 8 && password.includes('@')) {
    console.log('Password is strong')
} else if ((password.length >= 6 && password.includes('@')) || password.length >= 8) {
    console.log('Password is medium')
}else {
    console.log('Please add strong password')
}
