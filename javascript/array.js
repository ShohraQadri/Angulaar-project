const myarr = ["qadri", "a", "b", "g", "s", "h"];
// console.log(myarr);
// myarr.push(6)
// console.log(myarr);
// myarr.unshift(9)
// console.log(myarr);
// myarr.shift();
// console.log(myarr);

// const mynewArr = myarr.slice(2, 3);
// console.log(mynewArr);
// console.log(myarr);

// ********* splice ye main array ke print krayenge agr to jo range di thi  ye main array ke us data ke us range ko neglact kr dega balki slic asa ni krta h 
const mynewarr2 = myarr.splice(1, 2);
console.log(mynewarr2);
console.log(myarr);

const Array_A = ["mohan", "sohan", "komal"];
const Array_B = ["ram", "sham", "meena"];
const Array_C = ["mota", "kashyap", "das"];
// concat method
const New_ArrayC = Array_A.concat(Array_B);
// console.log(New_ArrayC);

// const New_ArrayD = [...Array_A, ...Array_B, ...Array_C]
// console.log(New_ArrayD);
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3));

// console.log(Array.isArray("shohra"));
// console.log(Array.from("Shohra"));