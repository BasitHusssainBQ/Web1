const header = document.querySelector('#header');
const allPara = document.querySelectorAll('p');
const para = document.getElementsByClassName('text');
const getHeader = document.getElementById('header')
const sec = document.getElementsByTagName('section')

const arr = new Array(...sec)

console.log(sec)

arr.forEach((item) => {
    console.log(item.innerHTML)
})