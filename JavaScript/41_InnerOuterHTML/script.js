let x , y;
x = document.getElementsByTagName('span')[0];
console.log("log" , x);
y = document.getElementsByTagName('span')[0];
console.dir(y);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.tagName);


// console.log("child" , document.body.firstChild.tagName); // undefined
// console.log("Element " , document.body.firstElementChild.nodeName); // span



// ------Inner HTML------
let inner = first.innerHTML;
console.log("inner" , inner);

first.innerHTML = "<i> I am italic font </i>";

console.log("outer" , first.outerHTML);

// text Content
console.log(document.body.textContent);

// Hidden
first.hidden = false;
