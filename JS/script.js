let number = 1;
let numbe = 2;
let numb = 3;
let num = 4;
let nu = 5;
let m = [number, numbe, numb, num, nu]
let r = Math.floor(Math.random() * 5);
console.log(m[r]);
let h1 = document.querySelector("h1")
h1.textContent = m[r]

let btn = document.querySelector(".btn")
btn.addEventListener('click', function () {
        let m = [number, numbe, numb, num, nu]
        let r = Math.floor(Math.random() * 5);
        let h1 = document.querySelector("h1")
        h1.textContent = m[r] 
})